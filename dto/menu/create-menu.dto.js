const Joi = require("joi")

const CreateMenuDTO = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    description: Joi.string().trim().max(500).optional(),
    price: Joi.number().positive().precision(2).required(),
    category: Joi.string().trim().required(),
    isAvailabe: Joi.boolean().default(true),
    image: Joi.string().uri().optional()
})

module.exports = {CreateMenuDTO}