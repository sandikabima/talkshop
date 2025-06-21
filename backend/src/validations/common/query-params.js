const Joi = require("joi");

const querySchema = Joi.object({
  search: Joi.string().optional().allow(""),
  page: Joi.number().integer().min(1).optional().default(1),
  limit: Joi.string().optional().allow(""),
  sort: Joi.string().valid("userName", "createdAt").optional().default("createdAt"),
  order: Joi.string().valid("asc", "desc").optional().default("desc")
});

module.exports = {querySchema};
