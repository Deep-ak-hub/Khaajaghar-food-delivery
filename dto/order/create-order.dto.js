const Joi = require("joi")
const { PhoneRegex } = require("../../utils/regex")
const { OrderItemDTO } = require("./order-item.dto")

const CreateOrderDTO = Joi.object({
    restaurantId: Joi.string().required(),
    items: Joi.array().items(OrderItemDTO).min(1).required(),
    deliveryAddress: Joi.string().trim().required(),
    phone: Joi.string().trim().regex(PhoneRegex).required(),
    specialInstruction: Joi.string().trim().max(200).optional()
})

module.exports = {CreateOrderDTO}