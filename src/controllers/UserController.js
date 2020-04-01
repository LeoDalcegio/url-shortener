const User = require('../models/User');


module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        
        const users = await User.paginate({ }, { 
            select: 'name email',
            page, 
            limit: 20
        });
        
        return response.json(users);
    },

    async show(request, response){
        const user = await User.findById(request.params.id).select('name email');

        if(!user) return response.status(404).send('User not found');
        
        return response.json(user);
    },
    
    async update(request, response){
        const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
        
        return response.json({
            'user_id': user._id,
            'name': user.name,
            'email': user.email
        });
    },

    async destroy(request, response) {
        const { id } = request.params;
        
        try{
            await User.findByIdAndDelete(id);
    
            return response.sendStatus(200)
        }catch(err){
            return response.status(400).send(err)
        }
    },


}
