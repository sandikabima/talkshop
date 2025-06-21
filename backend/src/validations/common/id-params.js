const Joi = require("joi");

const idParamSchema = Joi.object({
  id: Joi.number().integer().min(1).required()
});

module.exports = {idParamSchema};   