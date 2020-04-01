const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const verify = require('../utils/verifyToken');

const UserController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.get('/', UserController.index);

userRoutes.get('/:id',celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}), 
    UserController.show
);

userRoutes.put('/:id', celebrate({[Segments.BODY]: Joi.object({
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
    verify,
    UserController.update        
);

userRoutes.delete('/:id', celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}), 
    verify, 
    UserController.destroy
);

module.exports = userRoutes;
