const ShortUrl = require('../models/ShortUrl')

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const { user } = request.query;
        
        const shortUrls = await ShortUrl.paginate({ user: user  }, { 
            page,
            limit: 20
        });
        
        return response.json(shortUrls);
    },

    async redirect(request, response){
        const shortUrl = await ShortUrl.findOne({ short: request.params.shortUrl });

        if (shortUrl == null) return response.sendStatus(404);

        shortUrl.clicks++;

        shortUrl.save()

        return response.redirect(301, shortUrl.full);
    },

    async create(request, response){

        if(await ShortUrl.findOne({ short: request.body.short })){
            return response.status(409).send('Short url already exist');
        };

        const shortUrl = await ShortUrl.create({
            full: request.body.full,
            short: request.body.short,
            user: request.body.user_id ? request.body.user_id : null 
        });

        return response.json(shortUrl);
    },

    async update(request, response){
        const shortUrl = await ShortUrl.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(shortUrl);
    },

    async destroy(request, response){
        await ShortUrl.findByIdAndRemove(request.params.id);
        
        return response.sendStatus(200);
    },

    async chekIfShortUrlExists(request, respose){
        const shortUrl = await ShortUrl.findOne({ short: request.params.shortUrl })

        if(shortUrl){
            return respose.send(true);
        }else{
            return respose.send(false);
        }

    }
};