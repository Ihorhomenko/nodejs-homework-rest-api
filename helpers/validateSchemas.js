const Joi = require("joi")

const schemaContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
})

const schemaUser = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required()
})

const schemaEmailVerify = Joi.object({
  email: Joi.string().required(),
})

module.exports = {
  schemaContact,
  schemaUser,
  schemaEmailVerify,
}
