const ShortUrl = require('../models/shortUrl')

module.exports = {
    async index(request, response){
        const shortUrls = await ShortUrl.find();

        return response.json(shortUrls);
    },

    async show(request, response){
        const shortUrl = await ShortUrl.findOne({ short: request.params.shortUrl });

        if (shortUrl == null) return response.sendStatus(404);

        shortUrl.clicks++;

        shortUrl.save()

        return response.redirect(shortUrl.full);
    },

    async create(request, response){
        await ShortUrl.create({ 
            full: request.body.fullUrl,
            short: request.body.shortUrl
         });
    
        return response.sendStatus(200);
    },

    async destroy(req, res){
        await ShortUrl.findByIdAndRemove(req.params.id);
        
        return res.send();
    }
};