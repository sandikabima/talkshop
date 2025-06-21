const Joi = require("joi");

const queryUserSchema = Joi.object({
  search: Joi.string().optional().allow(""),
  page: Joi.number().integer().min(1).optional().default(1),
  limit: Joi.number().integer().min(1).max(100).optional().default(10),
  sort: Joi.string().valid("userName", "createdAt").optional().default("createdAt"),
  order: Joi.string().valid("asc", "desc").optional().default("desc")
});

module.exports = {queryUserSchema};
