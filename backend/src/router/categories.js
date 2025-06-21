const express = require("express")
const routerCategories = express.Router()
const controllerCategories = require("../controllers/categories/categories-controller")
const validate = require("../middleware/validate")
const { categoriesSchema } = require("../validations/categories/validation-categories")
const { idParamSchema } = require("../validations/common/id-params")
const { querySchema } = require("../validations/common/query-params")
const asyncHandler = require("../middleware/asyncHandler")
const autenticate = require("../middleware/autenticate");
const authorAdmin = require("../middleware/authorAdmin");


routerCategories.post("/api/v1/categories", autenticate, authorAdmin, validate({ body: categoriesSchema }), asyncHandler(controllerCategories.addCategories))
routerCategories.get("/api/v1/categories/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), asyncHandler(controllerCategories.getCategoriesById))
routerCategories.get("/api/v1/categories", autenticate, authorAdmin, validate({ query: querySchema }), asyncHandler(controllerCategories.getFilteredCategories))
routerCategories.put("/api/v1/categories/:id", autenticate, authorAdmin, validate({ body: categoriesSchema }), asyncHandler(controllerCategories.updateCategories))
routerCategories.delete("/api/v1/categories/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), asyncHandler(controllerCategories.deleteCategories))


module.exports = routerCategories