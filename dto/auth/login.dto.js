const Joi = require("joi")

const LoginDTO = Joi.object({
      email: Joi.string().trim().email().required().messages({
        "string.empty": "Email is required",
        "string.email": "Please provide a valid email address",
        "any.required": "Email is required",
      }),
      password: Joi.string().required().messages({
        "string.empty" : "Password can't be empty"
    })
}).options({
    abortEarly: false
})


module.exports = {LoginDTO}