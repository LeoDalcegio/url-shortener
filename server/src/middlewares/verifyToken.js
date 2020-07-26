'use-strict';

const jwt = require('jsonwebtoken');

module.exports = function verifyToken(request, response, next){
    const token = request.header('auth-token');

    if(!token) return response.status(401).send('Access Denied');
    
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
            if (err) return response.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            
            request.user = verified;

            return next();
        });
    }catch(err){
        return response.status(400).send('Invalid Token');
    }
}
