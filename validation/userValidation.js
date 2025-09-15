const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        'string.base': `"Username" should be a type of 'text'`,
        'string.empty': `"Username" cannot be an empty field`,
        'string.min': `"Username" should have a minimum length of {#limit}`,
        'any.required': `"Username" is a required field`
    }),
    email: Joi.string().email().required().messages({
        'string.email': `'Email' must be a valid email`,
        'any.required': `'Email' is a required field`
    }),
    dateOfBirth: Joi.date().required().messages({
        'date.base': `'Date of Birth' must be a valid date`,
        'any.required': `'Date of Birth' is a required field`
    }),
});

module.exports = { userValidationSchema };