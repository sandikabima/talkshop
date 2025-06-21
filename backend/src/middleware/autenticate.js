const { verifyToken } = require("../helper/jwt");
const asyncHandler = require("../middleware/asyncHandler")

const autenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    const error = new Error("Access token missing")
    error.statusCode = 401
    throw error
  }

  const decoded = verifyToken(token)
  req.user = {
    id: decoded.userId,
    email: decoded.email, 
    role: decoded.role
  }

  next()

})

module.exports = autenticate
