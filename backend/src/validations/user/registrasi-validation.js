const Joi = require("joi");

const registerUserSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.base": `"Username" must be a text`,
    "string.min": `"Username" must be at least 3 characters`,
    "string.max": `"Username" must be at most 30 characters`,
    "any.required": `"Username" is required`,
  }),
  email: Joi.string().email().required().messages({
    "string.base": `"Email" must be a text`,
    "string.email": `"Email" is not valid`,
    "any.required": `"Email" is required`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"Password" must be a text`,
    "string.min": `"Password" must be at least 6 characters`,
    "any.required": `"Password" is required`,
  }),
});

module.exports = { registerUserSchema };
