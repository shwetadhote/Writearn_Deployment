const ALLOWED_ORIGINS = [
  "writearn.in",
  "www.writearn.in",
  "portal.writearn.in",
  "admin.writearn.in",
  'localhost:3000',
  "*"
].map((origin) => `https://${origin}`);

const validateDomain = (req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    return next();
  }
  if (!ALLOWED_ORIGINS.includes(req.headers.origin)) {
    console.log("unrecognized domain", req.headers.origin);
    return res.status(403).send("Forbidden");
  }

  next();
};

module.exports = {
  validateDomain,
  ALLOWED_ORIGINS,
};
