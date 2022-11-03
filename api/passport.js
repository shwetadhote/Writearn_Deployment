const {
    Strategy: JWTStrategy,
    ExtractJwt: ExtractJWT,
  } = require("passport-jwt"),
  FacebookStrategy = require("passport-facebook").Strategy,
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const { AuthController } = require("./controllers");
/**
 *
 * @param {*} passport
 */
const passportJWT = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  };
  passport.use(
    new JWTStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload._id);
        if (!user) {
          throw new Error("User not authenticated!");
        }
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
/**
 *
 * @param {*} passport
 */
const passportFacebookLogin = (passport) => {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: `${process.env.APP_URL}/auth/facebook-login/callback`,
        passReqToCallback: true,
        profileFields: ["id", "name", "displayName", "picture", "emails"],
      },
      AuthController.socialSignup
    )
  );
};
/**
 *
 */
// GOOGLE LOGIN
const passportGoogleLogin = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.APP_URL}/auth/google/callback`,
        passReqToCallback: true,
      },
      AuthController.socialSignup
    )
  );
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });
};
module.exports = {
  passportJWT,
  passportFacebookLogin,
  passportGoogleLogin,
};
