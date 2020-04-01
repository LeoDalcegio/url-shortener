const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const AuthController = require('../controllers/AuthController');

const authRoutes = express.Router();

authRoutes.post('/register', celebrate({[Segments.BODY]: Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()                 
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
    }),}), 
    AuthController.register
);

authRoutes.post('/login', celebrate({[Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(6) 
            .required() 
            .email(),
        password: Joi.string()  
            .min(6) 
            .required(),
    }),}),
    AuthController.login
);


module.exports = authRoutes;
