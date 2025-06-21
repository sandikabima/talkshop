const Joi = require("joi");

const stockSchema = Joi.object({
  productId: Joi.number().integer().positive().required().messages({
    "any.required": "Product ID is required",
    "number.base": "Product ID must be a number",
    "number.positive": "Product ID must be a positive number",
  }),
  quantity: Joi.number().integer().min(0).required().messages({
    "any.required": "Quantity is required",
    "number.base": "Quantity must be a number",
    "number.min": "Quantity cannot be negative",
  }),
  location: Joi.string().min(2).required().messages({
    "any.required": "Location is required",
    "string.base": "Location must be a string",
    "string.min": "Location must be at least 2 characters long",
  }),
});

module.exports = {stockSchema};
