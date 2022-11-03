const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel, JobQueueModel, UserFollowerModel } = require("./../models"),
  {
    ErrorHelper,
    EmailHelper,
    IPHelper,
    MailchimpApiHelper,
    PasswordHelper,
  } = require("./../helpers"),
  {
    LoginValidator,
    SignUpValidator,
    ProfileValidator,
  } = require("../validation");
const { RazorPayContact } = require("razorpayx-nodejs-sdk");
const { getIp } = IPHelper;

/**
 * Register an email if not already registered
 *
 * @param {*} req
 * @param {*} res
 * @returns JSON response
 */
const register = async (req, res) => {
  try {
    const { errors, isValid } = SignUpValidator(req.body);
    if (!isValid) {
      return res
        .status(422)
        .json({ errors, message: "Request data not valid." });
    }

    const user = await UserModel.findOne({
      email: req.body.email,
    });
    if (user) {
      return res.status(400).json({
        message:
          "This email is already registered with us. Please try with other email or try login.",
      });
    }
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const contactCreateResponse = await RazorPayContact.create({
      name: /^[A-Za-z]+$/.test(name) ? name : req.body.email.split("@")[0],
      email: req.body.email,
      type: "customer",
    });
    if (!contactCreateResponse.isError) {
      req.body.razorPayContactId = contactCreateResponse.data.id;
    }
    const u = new UserModel({
      ...req.body,
      userType: "creator",
      username: req.body.email.split("@")[0],
      password: PasswordHelper.encryptPassword(req.body.password),
      createdIP: getIp(req),
    });
    const newUser = await u.save();
    if (req.body.isSubscribeToNewsletter) {
      await MailchimpApiHelper.addMemberToList(
        newUser.email,
        newUser.firstName,
        newUser.lastName
      );
    }
    try {
      await JobQueueModel.create({
        data: {
          to: newUser.email,
          subject: "📌Welcome to WRITEARN 🖌",
          templateName: "registration",
          replaceObject: {
            firstName: newUser.firstName,
          },
        },
        type: "email",
      });
    } catch (error) {
      ErrorHelper.createError(error, req);
    }
    const payload = { ...newUser._doc };

    return res.status(200).json({
      message:
        "Your account is registered sucessfully. You will receive an email confirmation email shortly.",
      token: `Bearer ${PasswordHelper.generateToken(payload)}`,
      details: u,
      expires: new Date().getTime() + 86400,
      expiresIn: 86400,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const login = async (req, res) => {
  try {
    const { errors, isValid } = LoginValidator(req.body);
    if (!isValid) {
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({
      email: email,
      userType: "creator",
    });
    if (!user) {
      errors.email = "User not found";
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    if (!PasswordHelper.comparePassword(password, user.password)) {
      errors.password = "Incorrect Password";
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        message:
          "Your account is no longer active, and you can't login to the account. Please contact administrator.",
      });
    }
    const payload = { ...user._doc };
    return res.status(200).json({
      message: "Logged in successfully. Redirecting to dashboard.",
      token: `Bearer ${PasswordHelper.generateToken(payload)}`,
      expires: new Date().getTime() + 86400,
      expiresIn: 86400,
      details: user,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
// social LOGIN
const socialSignup = async (req, accessToken, refreshToken, profile, done) => {
  console.log(profile, "profile");
  let user = await UserModel.findOne({
    email: profile.emails[0].value,
  });
  let payload = {};
  if (user) {
    payload = user.toJSON();
  } else {
    const name = `${profile.name.givenName} ${profile.name.familyName}`;
    const email = profile.emails ? profile.emails[0].value : "";
    const contactCreateResponse = await RazorPayContact.create({
      name: /^[A-Za-z]+$/.test(name) ? name : email.split("@")[0],
      email,
      type: "customer",
    });
    if (!contactCreateResponse.isError) {
      req.body.razorPayContactId = contactCreateResponse.data.id;
    }
    const u = new UserModel({
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      email: profile.emails ? profile.emails[0].value : "",
      userType: "creator",
      username: profile.emails ? profile.emails[0].value.split("@")[0] : "",
      password: PasswordHelper.encryptPassword(
        profile.emails ? profile.emails[0].value : ""
      ),
      createdIP: getIp(req),
      isSocial: 1,
      profileImage:
        profile.provider === "facebook"
          ? `https://graph.facebook.com/${profile.id}/picture?type=large`
          : profile.photos[0].value,
    });
    const newUser = await u.save();
    await MailchimpApiHelper.addMemberToList(
      newUser.email,
      newUser.firstName,
      newUser.lastName
    );
    try {
      await JobQueueModel.create({
        data: {
          to: newUser.email,
          subject: "📌Welcome to WRITEARN 🖌",
          templateName: "registration",
          replaceObject: {
            firstName: newUser.firstName,
          },
        },
        type: "email",
      });
    } catch (error) {
      ErrorHelper.createError(error, req);
    }
    payload = { ...newUser._doc };
  }
  done(null, {
    token: `Bearer ${PasswordHelper.generateToken(payload)}`,
    expires: new Date().getTime() + 86400,
    expiresIn: 86400,
  });
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const profile = (req, res) => {
  return res.status(200).json(req.user);
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getFrontendUserDetails = async (req, res) => {
  const result = await UserFollowerModel.find({
    followerId: req.user._id,
    isFollowing: true,
  });
  return res.status(200).json({
    details: req.user,
    followeesData: result,
    token: `Bearer ${PasswordHelper.generateToken(req.user._doc)}`,
    expires: new Date().getTime() + 86400,
    expiresIn: 86400,
  });
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const refreshToken = async (req, res) => {
  const payload = await UserModel.findById(req.user.id);
  if (payload) {
    return res.status(200).json({
      message: "New token provided.",
      token: `Bearer ${PasswordHelper.generateToken(payload._doc)}`,
      expires: new Date().getTime() + 86400,
      expiresIn: 86400,
    });
  } else {
    return res.status(401).json({ message: "Unauthorized access" });
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const updateProfileDetails = async (req, res) => {
  try {
    const { errors, isValid } = await ProfileValidator(req.body, req.user._id);
    if (!isValid) {
      return res.status(422).json({ errors, message: "Invalid request body." });
    }
    const { body, user, file } = req;
    delete body.email;
    let data = {
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      gender: body.gender,
      phoneNumber: body.phoneNumber,
      address: body.address,
      city: body.city,
      state: body.state,
      pincode: body.pincode,
      about: body.about,
    };
    if (file && file.filename) {
      data.profileImage = file.filename;
    }

    if (user.razorPayContactId) {
      await RazorPayContact.update(user.razorPayContactId, {
        name: `${data.firstName} ${data.lastName}`,
        contact: data.phoneNumber,
        type: "customer",
      });
    } else {
      const contactCreateResponse = await RazorPayContact.create({
        name: `${data.firstName} ${data.lastName}`,
        email: user.email,
        contact: data.phoneNumber,
        type: "customer",
      });
      if (!contactCreateResponse.isError) {
        data.razorPayContactId = contactCreateResponse.data.id;
      }
    }
    await UserModel.updateOne(
      {
        _id: user._id,
      },
      {
        $set: data,
      }
    );
    return res.status(200).json({
      message: "Profile details updated successfully.",
      data,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const checkUsername = async (req, res) => {
  try {
    const { user, query } = req;
    const { username } = query;

    const userDetails = await UserModel.findOne({
      username: username,
      _id: {
        $ne: user._id,
      },
    });
    if (userDetails) {
      throw new Error("This username is not available");
    }

    return res.status(200).json({
      message: "This usename is available.",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const loginAsAdmin = async (req, res) => {
  try {
    const { errors, isValid } = LoginValidator(req.body);
    if (!isValid) {
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email, userType: "admin" });
    if (!user) {
      errors.email = "User not found";
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    if (!PasswordHelper.comparePassword(password, user.password)) {
      errors.password = "Incorrect Password";
      return res
        .status(422)
        .json({ errors, message: "Incorrect username or password." });
    }

    const payload = { ...user._doc };
    return res.status(200).json({
      message: "Logged in successfully. Redirecting to dashboard.",
      token: `Bearer ${PasswordHelper.generateToken(payload)}`,
      expires: new Date().getTime() + 86400,
      expiresIn: 86400,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const loginToUserPortal = async (req, res) => {
  try {
    const { user } = req;
    const result = await UserModel.findOne({ _id: user._id });
    const data = {
      email: result.email,
      _id: result._id,
    };
    const token = PasswordHelper.generateToken(data);
    return res.status(200).json({
      message: "Request processed successfully.",
      token,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const proxyLoginToUserAccount = async (req, res) => {
  try {
    const { userId } = req.query;
    const result = await UserModel.findOne({ _id: userId });
    const data = {
      email: result.email,
      _id: result._id,
    };
    const token = PasswordHelper.generateToken(data);
    return res.status(200).json({
      message: "Request processed successfully.",
      token,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const verifyLoginToUserPortalReq = async (req, res) => {
  try {
    const { user } = req;
    const payload = await UserModel.findById(user.id);
    if (!payload) {
      return res.status(400).json({
        message: "Invalid login attempt!",
      });
    }
    return res.status(200).json({
      message: "Logged in successfully. Redirecting to dashboard.",
      token: `Bearer ${PasswordHelper.generateToken(payload._doc)}`,
      expires: new Date().getTime() + 86400,
      expiresIn: 86400,
      details: user,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
/**
 *USER FORGOT PASSWORD API
 */
const forgotPassword = async (req, res) => {
  const {
    body: { email },
  } = req;
  try {
    const userData = await UserModel.findOne({
      email,
    });
    if (!userData) {
      return res.status(400).json({
        message:
          "We are sorry your email is not registered with us, however you may start a new account by clicking join",
      });
    }
    // Reset Password TOKEN
    const resetPasswordToken = jwt.sign(
      { email: userData.email },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );
    await UserModel.updateOne(
      {
        email,
      },
      {
        $set: {
          resetPasswordToken,
        },
      }
    );
    const salt = bcrypt.genSaltSync(10);
    const hashId = await bcrypt.hashSync(userData.email, salt);
    const emailInstance = new EmailHelper.Email(req);
    emailInstance.setSubject("Password change request");
    emailInstance.setBody("", "forgetPassword", {
      firstName: userData.firstName,
      hashId,
      resetPasswordToken,
    });
    emailInstance.sendEmail(email);
    return res.status(200).json({
      responseCode: 200,
      //SUCCESS
      message: `Password reset link have been sent to ${email}. Do check your spam and junk folders if it doesn't show up in your Inbox.`,
      success: true,
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
// USER FORGOT PASSWORD API

// USER recover password link VERIFICATION API
const recoverPasswordLinkVerification = async (req, res) => {
  const {
    body: { verifylink, token },
  } = req;
  try {
    const userData = await UserModel.findOne({
      resetPasswordToken: token,
    });
    if (!userData) {
      return res.status(400).send({
        message: "Failed to authenticate token.",
      });
    }
    const tokenMatch = await bcrypt.compareSync(userData.email, verifylink);
    if (!tokenMatch) {
      return res.status(400).send({ message: "Unauthorized link" });
    }
    return res.status(200).json({
      message: "Recover password link Verified Successfully.",
      data: { userId: userData._id },
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
// USER VERIFICATION API

// USER RESET PASSWORD API
const userResetPassword = async (req, res) => {
  const {
    body: { password, userId },
  } = req;
  try {
    const userData = await UserModel.findById(userId);
    if (!userData) {
      return res.status(400).json({
        message: "User Not Found.",
        success: false,
      });
    }
    const result = await UserModel.updateOne(
      { _id: userId },
      {
        $set: {
          password: PasswordHelper.encryptPassword(password),
          resetPasswordToken: null,
        },
      }
    );
    console.log(result, "result");

    return res.status(200).json({
      message: "Password Updated Successfully.",
    });
  } catch (error) {
    return ErrorHelper.sendDefaultError(error, req, res);
  }
};
module.exports = {
  register,
  login,
  profile,
  getFrontendUserDetails,
  refreshToken,
  updateProfileDetails,
  checkUsername,
  loginAsAdmin,
  socialSignup,
  loginToUserPortal,
  proxyLoginToUserAccount,
  verifyLoginToUserPortalReq,
  forgotPassword,
  recoverPasswordLinkVerification,
  userResetPassword,
};
