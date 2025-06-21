const { User } = require("../../models")
const { comparePassword } = require('../../helper/bcrypt');
const { generateAccessToken, generateRefreshToken, verifyToken } = require("../../helper/jwt");

class authController {

  static async register(req, res) {
    const { username, email, password } = req.body

    const getUser = await User.findOne({ where: { email } })

    if (getUser) {
      const error = new Error("Email Existing")
      error.statuCode = 409
      throw error
    }

    const newUser = await User.create({
      userName: username, email, password
    })

    res.status(201).json({
      success: true,
      message: "Register successfully"
    })
  }

  static async login(req, res) {
    const { email, password } = req.body

    const exist = await User.findOne({ where: { email } })

    if (!exist) {
      const error = new Error("Invalid Email")
      error.statusCode = 400
      throw error
    }

    const isPass = await comparePassword(password, exist.password)
    if (!isPass) {
      const error = new Error("Invalid Password")
      error.statusCode = 400
      throw error
    }

    const payload = { userId: exist.userId, email, role: exist.role }
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)

    await User.update(
      { refresh_token: refreshToken },
      { where: { userId: exist.userId } }
    )

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    })

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: exist.email,
        role: exist.role,
        accessToken: accessToken
      }
    })
  }

  static async refreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      const error = new Error("No refresh token provided");
      error.statusCode = 401;
      throw error;
    }

    const users = await User.findAll({
      where: { refresh_token: refreshToken },
    });

    if (!users.length) {
      const error = new Error("Invalid refresh token");
      error.statusCode = 403;
      throw error;
    }

    const currentUser = users[0];

    try {
      const decoded = verifyToken(refreshToken, "refresh");
      const newAccessToken = generateAccessToken({
        userId: currentUser.userId,
        email: currentUser.email,
        role: currentUser.role
      });

      res.status(200).json({
        success: true,
        user: {
          accessToken: newAccessToken,
          email: currentUser.email,
          role: currentUser.role
        }
      });

    } catch (err) {
      const error = new Error("Expired or invalid refresh token");
      error.statusCode = 403;
      throw error;
    }
  }

  static async logout(req, res) {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(204).json({ message: "Already logged out" });
    }

    const users = await User.findAll({
      where: { refresh_token: refreshToken },
    });

    if (users.length) {
      await User.update(
        { refresh_token: null },
        { where: { userId: users[0].userId } }
      );
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    res.status(200).json({ message: "Logged out successfully" });
  }

}

module.exports = authController