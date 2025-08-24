const Joi = require("joi")
const { PhoneRegex } = require("../../utils/regex")

const CreateRestaurantDTO = Joi.object({
    name: Joi.string().trim().min(2).max(100).required(),
    address: Joi.string().trim().min(5).max(300).required(),
    phone: Joi.string().trim().regex(PhoneRegex).required(),
    email: Joi.string().trim().email().required(),
    description: Joi.string().trin().max(500).optional(),
    openingHours: Joi.string().trim().optional(),
    isActive: Joi.boolean.default(true),
    logo: Joi.string.uri().optional()
})

module.exports = {CreateRestaurantDTO}