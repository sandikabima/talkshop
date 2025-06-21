const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

function generateAccessToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
}

function generateRefreshToken(payload) {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
}

function verifyToken(token, type = "access") {
  const secret = type === "refresh" ? REFRESH_SECRET : JWT_SECRET;
  return jwt.verify(token, secret);
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};