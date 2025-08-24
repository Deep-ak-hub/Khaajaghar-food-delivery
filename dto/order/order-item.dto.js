const Joi = require("joi")

const OrderItemDTO = Joi.object({
    menutItemId: Joi.string().required(),
    quantity: Joi.number().integer().min(1).required(),
    price: Joi.number().positive().precision(2).required()
})

module.exports = {OrderItemDTO}