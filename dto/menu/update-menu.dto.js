const Joi = require("joi")

const UpdateMenuDTO = Joi.object({
    name: Joi.string().trim().min(2).max(100).opoti
    (),
    description: Joi.string().trim().max(500).optional(),
    price: Joi.number().positive().precision(2).optional(),
    category: Joi.string().trim().optional(),
    isAvailable: Joi.boolean().optional(),
    image: Joi.string().uri().optional()
}).min(1)

module.exports = UpdateMenuDTO