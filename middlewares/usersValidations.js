const Joi = require('joi');

// Requisito 1
const usersValidations = (req, res, next) => {
    const { error } = Joi.object({
        displayName: Joi.string().min(8).required(),
        email: Joi.string().email().required(),
        password: Joi.string().length(6).required(),
        image: Joi.not().required(),
    }).validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = {
    usersValidations,
};