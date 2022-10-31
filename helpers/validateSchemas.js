const Joi = require("joi")

const schemaContact = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
})

const shemaUser = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } }).required(),
  password: Joi.string().min(6).required()
})

module.exports = {
  schemaContact,
  shemaUser,
}
