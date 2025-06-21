const express = require("express")
const router = express.Router()
const controllerAuth = require("../controllers/auth/auth-controller.js")
const validate = require("../middleware/validate.js")
const asyncHandler = require("../middleware/asyncHandler")
const { loginValidationSchema } = require("../validations/user/login-validation.js")
const routerUser = require("./user.js")
const routerProduct = require("./product.js")
const routerCategories = require("./Categories.js")
const routerProductStock = require("./productStock.js")
const { registerUserSchema } = require("../validations/user/registrasi-validation.js")



router.post("/api/v1/register", validate({ body: registerUserSchema }), asyncHandler(controllerAuth.register))
router.post("/api/v1/login", validate(loginValidationSchema), asyncHandler(controllerAuth.login))
router.get("/api/v1/token", asyncHandler(controllerAuth.refreshToken));
router.delete("/api/v1/logout", asyncHandler(controllerAuth.logout));

router.use(routerUser)
router.use(routerProduct)
router.use(routerCategories)
router.use(routerProductStock)




module.exports = router