const express = require("express")
const routerUser = express.Router()
const controllerUser = require("../controllers/user/user-controller")
const validate = require("../middleware/validate")
const { registerUserSchema } = require("../validations/user/registrasi-validation")
const { queryUserSchema } = require("../validations/user/user-query")
const { idParamSchema } = require("../validations/user/user-params")
const asyncHandler = require("../middleware/asyncHandler")
const autenticate = require("../middleware/autenticate");
const authorAdmin = require("../middleware/authorAdmin");


routerUser.post("/api/v1/user",autenticate, authorAdmin, validate({ body: registerUserSchema }), asyncHandler(controllerUser.addUser))
routerUser.get("/api/v1/user/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), asyncHandler(controllerUser.getUserById))
routerUser.get("/api/v1/user", autenticate, authorAdmin, validate({ query: queryUserSchema }), asyncHandler(controllerUser.getFilteredUser))
routerUser.put("/api/v1/user/:id", autenticate, authorAdmin, asyncHandler(controllerUser.updateUser))
routerUser.delete("/api/v1/user/:id", autenticate, authorAdmin, asyncHandler(controllerUser.deleteUser))
    

module.exports = routerUser