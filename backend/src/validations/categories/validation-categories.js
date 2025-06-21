const Joi = require("joi");

const categoriesSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": `"name" must be a text`,
    "string.min": `"name" must be at least 3 characters`,
    "string.max": `"name" must be at most 30 characters`,
    "any.required": `"name" is required`,
  }),
});

module.exports = { categoriesSchema };
