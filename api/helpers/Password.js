const bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  passport = require("passport"),
  { getIp } = require("./IP");
const { UserModel } = require("../models");
/**
 *
 * @param {*} n
 */
const generateSalt = (n = 10) => {
  return bcrypt.genSaltSync(n);
};
/**
 *
 * @param {*} password
 * @param {*} salt
 */
const encryptPassword = (password, salt = null) => {
  if (!salt) {
    salt = generateSalt(10);
  }
  return bcrypt.hashSync(password, salt);
};
/**
 *
 * @param {*} plainPassword
 * @param {*} encryptedPassword
 */
const comparePassword = (plainPassword, encryptedPassword) => {
  return bcrypt.compareSync(plainPassword, encryptedPassword);
};
/**
 *
 * @param {*} payload
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};
/**
 *
 */
const createGuestUser = async (email, ip) => {
  const user = new UserModel({
    firstName: "Temp",
    lastName: "User",
    username: ip,
    email,
    password: encryptPassword(email),
    userType: "guest",
    createdIP: ip,
  });
  return await user.save();
};
/**
 *
 */
const validateLogin = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err || (Boolean(req.headers.portal) && user.userType === "guest")) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    req.user = user;
    next();
  })(req, res, next);
};
/**
 *
 */
const validateUnAuthorizedLogin = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (error, user) => {
    if (!user) {
      const ip = getIp(req);
      const email = `${ip}@temp.writearn.in`;
      const userDetails = await UserModel.findOne({
        email,
      });
      if (userDetails) {
        req.user = userDetails;
      } else {
        req.user = await createGuestUser(email, ip);
      }
    } else {
      req.user = user;
    }
    next();
  })(req, res, next);
};
/**
 *
 */
const validateAdminLogin = async (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (err, user) => {
    if (err || user.userType === "guest") {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    req.user = user;
    try {
      const userDetails = await UserModel.findOne({
        _id: req.user._id,
        userType: "admin",
      });
      if (!userDetails) {
        throw new Error("Not Authenticated!");
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({
        message: "You are not authenticate to access this API.",
      });
    }
  })(req, res, next);
};
/**
 * Generate Password
 */
  const generatePassword = (length = 6) => {
	var text = '';
	var possible =
		'abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (var i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
};
module.exports = {
  generateSalt,
  encryptPassword,
  comparePassword,
  generateToken,
  validateLogin,
  validateAdminLogin,
  validateUnAuthorizedLogin,
  generatePassword
};
