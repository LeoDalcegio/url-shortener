const express = require('express');

const ShortUrlController = require('./controllers/ShortUrlController');

const routes = express.Router();

routes.get('/shortUrl', ShortUrlController.index);
routes.post('/shortUrl', ShortUrlController.create);
routes.delete('/shortUrl/:id', ShortUrlController.destroy)


routes.get('/:shortUrl', ShortUrlController.show)

module.exports = routes;
