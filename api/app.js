const http = require("http"),
  express = require("express"),
  path = require("path"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  cors = require("cors"),
  seed = require("./seeders"),
  dotenv = require("dotenv");
dotenv.config();

require("./crons");

const {
  passportJWT,
  passportFacebookLogin,
  passportGoogleLogin,
} = require("./passport");

const rateLimit = require("express-rate-limit");
const api = require("./routes");
const { SocialShareController, WebhookController } = require("./controllers");
const { ALLOWED_ORIGINS } = require("./helpers/Domain");

(async () => {
  try {
    console.log("Trying to connect database %s", process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully! Starting Server!");

    // seed database with default details
    seed();
    //
    app.set("trust proxy", true);
    app.use(passport.initialize());
    app.use(
      cors(
        process.env.NODE_ENV !== "development"
          ? {
              origin: ALLOWED_ORIGINS,
            }
          : {}
      )
    );

    // password strategy
    passportJWT(passport);
    passportFacebookLogin(passport);
    passportGoogleLogin(passport);

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // view engine setup
    app.set("views", path.join(__dirname, "views"));
    app.set("view engine", "hbs");

    app.use("/static/files", express.static(path.join(__dirname, "uploads")));

    const limiter = rateLimit({
      windowMs: 30 * 1000, // 30 seconds
      max: 50, // Limit each IP to 100 requests per `window` (here, per 1 minute)
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });

    app.use("/v1", limiter, api);

    app.use("/cashfree-webhook", WebhookController.cashfreeWebhookHandler);

    // Social share
    app.get("/social-share", SocialShareController.socialShare);
    /********************************Facebook login********************************/
    app.get(
      "/auth/facebook",
      passport.authenticate("facebook", {
        scope: ["public_profile", "email"],
      })
    );
    app.get(
      "/auth/facebook-login/callback",
      passport.initialize(),
      passport.authenticate("facebook", { failureRedirect: `/` }),
      function (req, res) {
        if (!req.user.token) {
          return res.redirect(`${process.env.FRONTEND_URL}/`);
        }
        return res.redirect(
          `${process.env.FRONTEND_URL}/verify-user?token=${req.user.token}&userId=${req.user.id}`
        );
      }
    );
    /********************************Google login********************************/
    app.get(
      "/auth/google",
      passport.authenticate("google", {
        scope: [
          "https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/userinfo.email",
        ],
      })
    );
    app.get(
      "/auth/google/callback",
      passport.initialize(),
      passport.authenticate("google", {
        scope: [
          "https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/userinfo.email",
        ],
        failureRedirect: `/`,
      }),
      function (req, res) {
        if (!req.user.token) {
          return res.redirect(`${process.env.FRONTEND_URL}/`);
        }
        return res.redirect(
          `${process.env.FRONTEND_URL}/verify-user?token=${req.user.token}&userId=${req.user.id}`
        );
      }
    );

    const PORT = process.env.PORT || 8000;

    const server = http.createServer(app);

    server.listen(PORT).on("listening", () => {
      console.log(
        `Server is running on PORT ${PORT} in ${process.env.NODE_ENV} mode`
      );
    });
  } catch (error) {
    console.log("Unable to connect with database");
    process.exit(1);
  }
})();
