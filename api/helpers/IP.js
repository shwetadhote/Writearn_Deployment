/**
 *
 * @param {*} req
 */
const getIp = (req) =>
  req
    ? (req.headers["x-real-ip"] || "").split(",").pop().trim() ||
      (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
      req.ip ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress
    : "";

module.exports = {
  getIp,
};
