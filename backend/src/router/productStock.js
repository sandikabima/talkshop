const express = require("express")
const routerProductStock = express.Router()
const controllerProductStock = require("../controllers/productStock/productStock-controller")
const validate = require("../middleware/validate")
const { stockSchema } = require("../validations/productStock/validation-productStock")
const { idParamSchema } = require("../validations/common/id-params")
const { querySchema } = require("../validations/common/query-params")
const asyncHandler = require("../middleware/asyncHandler")
const autenticate = require("../middleware/autenticate");
const authorAdmin = require("../middleware/authorAdmin");


routerProductStock.post("/api/v1/productsstock", validate({ body: stockSchema }), asyncHandler(controllerProductStock.addProductStock))
routerProductStock.get("/api/v1/productsstock/:id", validate({ params: idParamSchema }), asyncHandler(controllerProductStock.getProductStockById))
routerProductStock.get("/api/v1/productsstock", validate({ query: querySchema }), asyncHandler(controllerProductStock.getFilteredProductStock))
routerProductStock.put("/api/v1/productsstock/:id", validate({ params: idParamSchema, body: stockSchema }), asyncHandler(controllerProductStock.updateProductStock))
routerProductStock.delete("/api/v1/productsstock/:id", validate({ params: idParamSchema }), asyncHandler(controllerProductStock.deleteProductStock))


module.exports = routerProductStock