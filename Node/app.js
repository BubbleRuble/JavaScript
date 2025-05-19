const Joi = require('joi')

const passwordSchema = Joi.string().min(4).max(12).alphanum();

console.log(passwordSchema.validate('Volvo'));