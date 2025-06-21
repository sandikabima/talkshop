const authorAdmin = (req, res, next) => {
    req.user?.role === "admin"
        ? next()
        : res.status(400).json({
            success: false,
            message: "Invalid Token",
        });
};

module.exports = authorAdmin 