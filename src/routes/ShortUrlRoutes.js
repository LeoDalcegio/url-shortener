const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const verify = require('../utils/verifyToken');

const ShortUrlController = require('../controllers/ShortUrlController');

const shortUrlRoutes = express.Router();

shortUrlRoutes.get('/shortUrl', ShortUrlController.index);

shortUrlRoutes.post('/shortUrl', celebrate({[Segments.BODY]: Joi.object({
    full: Joi.string()
        .required(),
    short: Joi.string()  
        .required(),
    }),}),
    ShortUrlController.create
);

shortUrlRoutes.post('/shortUrl/user', celebrate({[Segments.BODY]: Joi.object({
    full: Joi.string()
        .required(),
    short: Joi.string()  
        .required(),
    user_id: Joi.string()
        .required()
    }),}),
    verify,
    ShortUrlController.create
);

shortUrlRoutes.delete('/shortUrl/:id', celebrate({[Segments.PARAMS]: Joi.object({
    id: Joi.string().required()}),}),
    verify,
    ShortUrlController.destroy)
;

shortUrlRoutes.put('/shortUrl/:id', celebrate({[Segments.BODY]: Joi.object({
    full: Joi.string()
        .required(),
    short: Joi.string()  
        .required(),
    }),}),
    verify,
    ShortUrlController.update        
);

shortUrlRoutes.get('/shortUrl/:shortUrl', ShortUrlController.chekIfShortUrlExists)

shortUrlRoutes.get('/:shortUrl', ShortUrlController.redirect)

module.exports = shortUrlRoutes;
