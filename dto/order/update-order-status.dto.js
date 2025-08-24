const Joi = require("joi")

const UpdateOrderDTO = Joi.object({
    status: Joi.string().valid('pending', 'confirmed', 'preparing', 'ready', 'delivered', 'cancelled').required()
})

module.exports = UpdateOrderDTO