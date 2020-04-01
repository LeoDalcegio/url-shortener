const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(request, response) {

        try{
            const user = await User.findOne({ email: request.body.email })

            if(!user) return response.status(400).send('Email or password is wrong');

            const validPass = await bcrypt.compare(request.body.password, user.password);

            if(!validPass) return response.status(400).send('Invalid password');

            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
                
            return response.header('auth-token', token).send({
                'user_id': user._id,
                'name': user.name,
                'email': user.email
            });
        }catch(err){
            return response.status(401).send(err)
        }
    },
    
    async register(request, response){
            
        const emailExist = await User.findOne({ email: request.body.email })
    
        if(emailExist) return response.status(400).send('Email already exist');
    
        const salt = await bcrypt.genSalt(10);
        
        const hashPassword = await bcrypt.hash(request.body.password, salt);
    
        const user = new User({
            name: request.body.name,
            email: request.body.email,
            password: hashPassword
        });
        
        try{ 
            await user.save();
            
            return response.send({ user_id: user._id });
        }catch(err){
            return response.status(400).send(err);
        }
    },
}
