const Joi = require("joi");
const {
  PhoneRegex,
  PasswordRegex,
  RoleExp,
  GenderExp,
} = require("../../utils/regex");
const { UserRole } = require("../../config/constants");

const RegisterDTO = Joi.object({
  name: Joi.string().trim().min(2).max(50).required().messages({
    "string.empty": "Name can't be null",
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 50 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().trim().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  phone: Joi.string()
    .trim()
    .regex(PhoneRegex)
    .allow(null, "")
    .optional()
    .default(null)
    .messages({
      "string.pattern.base": "Phone must be a valid number",
    }),

  password: Joi.string().regex(PasswordRegex).required().messages({
    "string.empty": "Password cannot be null",
    "string.pattern.base":
      "Password must have an alpha numeric value with a special character and of 8 to 25",
    "any.required": "Password is required",
  }),

  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Password and Confirm Password should match",
    "any.required": "Password confirmation is required"
  }),

  role: Joi.string().regex(RoleExp).default(UserRole.CUSTOMER),

  gender: Joi.string().regex(GenderExp),

  dob: Joi.date().less("now"),

  address: Joi.string()
    .trim()
    .max(200)
    .allow(null, "")
    .optional()
    .default(null),
}).options({
  abortEarly: false,
});

module.exports = { RegisterDTO };
