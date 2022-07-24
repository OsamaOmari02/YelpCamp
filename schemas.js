const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.number().required(),
        location: Joi.number().required(),
        desc: Joi.number().required(),
    }).required()
});