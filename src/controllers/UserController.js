const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        
        const users = await User.paginate({ }, { 
            select: 'name email',
            page, 
            limit: 10 
        });
        
        return res.json(users);
    },
    async show(req, res){
        const user = await User.findById(req.params.id).select('name email');

        if(!user) return res.status(404).send('User not found');
        
        return res.json(user);
    },
    async store(req, res){
            
        const emailExist = await User.findOne({ email: req.body.email })
    
        if(emailExist) return res.status(400).send('Email already exist');
    
        const salt = await bcrypt.genSalt(10);
        
        const hashPassword = await bcrypt.hash(req.body.password, salt);
    
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
    
        try{ 
            await user.save();
            
            return res.send({ user_id: user._id });
        }catch(err){
            return res.status(400).send(err);
        }
    },

    async destroy(req, res) {
        const { id } = req.params;
        
        try{
            await User.findByIdAndDelete(id);
    
            return res.sendStatus(200)
        }catch(err){
            return res.status(400).send(err)
        }
    },


}
