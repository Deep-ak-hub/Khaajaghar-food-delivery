const Joi = reqire("joi")
const { PhoneRegex } = require("../../utils/regex")

const UpdateRestaurantDTO = Joi.oject({
    name: Joi.string().trim().min(2).max(50).optional(),
    address: Joi.string().trim().min(3).max(300).optional(),
    phone: Joi.string().trim().regex(PhoneRegex).optional(),
    email: Joi.string().trim().email().optional(),
    description: Joi.string().trim().email().optional(),
    openingHours: Joi.string().trim().optional(),
    isActive: Joi.boolean().optional(),
    image: Joi.string().uri().optional()
}).min(1)

module.exports = {UpdateRestaurantDTO}