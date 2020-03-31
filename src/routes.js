const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const verify = require('./utils/verifyToken');

const ShortUrlController = require('./controllers/ShortUrlController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.get('/users/:id',celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}), 
    UserController.show
);

routes.post('/users/register', celebrate({[Segments.BODY]: Joi.object({
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
    UserController.store
);

routes.post('/users/login', celebrate({[Segments.BODY]: Joi.object({
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

routes.delete('/users/:id', celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}), 
    verify, 
    UserController.destroy
);

routes.get('/shortUrl', ShortUrlController.index);

routes.post('/shortUrl', celebrate({[Segments.BODY]: Joi.object({
    full: Joi.string()
        .required(),
    short: Joi.string()  
        .required(),
    }),}),
    ShortUrlController.create
);

routes.delete('/shortUrl/:id', celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}),
    verify,
    ShortUrlController.destroy)
;

routes.get('/:shortUrl', ShortUrlController.show)

module.exports = routes;
