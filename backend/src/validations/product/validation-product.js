const Joi = require('joi');

const productSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.base': 'Name harus berupa teks',
        'string.empty': 'Name tidak boleh kosong',
        'string.min': 'Name minimal 3 karakter',
        'any.required': 'Name wajib diisi',
    }),
    description: Joi.string().allow('', null).messages({
        'string.base': 'Description harus berupa teks',
    }),
    price: Joi.number().min(0).required().messages({
        'number.base': 'Price harus berupa angka',
        'number.min': 'Price minimal 0',
        'any.required': 'Price wajib diisi',
    }),
    categoryId: Joi.number().integer().required().messages({
        'number.base': 'Category ID harus berupa angka',
        'number.integer': 'Category ID harus berupa bilangan bulat',
        'any.required': 'Category ID wajib diisi',
    }),
});

module.exports = { productSchema };
