const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req, res) {

        const user = await User.findOne({ email: req.body.email })

        if(!user) return res.status(400).send('Email or password is wrong');

        const validPass = await bcrypt.compare(req.body.password, user.password);

        if(!validPass) return res.status(400).send('Invalid password');

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

        return res.header('auth-token', token).send(token);
    }
}
