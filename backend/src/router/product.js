const express = require("express")
const routerProduct = express.Router()
const controllerProduct = require("../controllers/product/product-controller")
const validate = require("../middleware/validate")
const { productSchema } = require("../validations/product/validation-product")
const { idParamSchema } = require("../validations/common/id-params")
const { querySchema } = require("../validations/common/query-params")
const asyncHandler = require("../middleware/asyncHandler")
const upload = require("../middleware/upload");
const autenticate = require("../middleware/autenticate");
const authorAdmin = require("../middleware/authorAdmin");


routerProduct.post("/api/v1/product", autenticate, authorAdmin, upload.single("image"), validate({ body: productSchema }), asyncHandler(controllerProduct.addProduct))
routerProduct.get("/api/v1/product/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), asyncHandler(controllerProduct.getProductById))
routerProduct.get("/api/v1/product", validate({ query: querySchema }), asyncHandler(controllerProduct.getFilteredProduct))
routerProduct.put("/api/v1/product/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), upload.single("image"), validate({ body: productSchema }), asyncHandler(controllerProduct.updateProduct))
routerProduct.delete("/api/v1/product/:id", autenticate, authorAdmin, validate({ params: idParamSchema }), asyncHandler(controllerProduct.deleteProduct))


module.exports = routerProduct