const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const dotenv = require('dotenv');

const UserRoutes = require('./routes/UserRoutes')
const ShortUrlRoutes = require('./routes/ShortUrlRoutes')
const AuthRoutes = require('./routes/AuthRoutes')

const app = express();

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => console.log('Connected to db!'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/users',UserRoutes)
app.use('/users/auth',AuthRoutes)
app.use(ShortUrlRoutes)
app.use(errors());

app.listen(process.env.PORT || 3000, () => console.log('Server Up and running'));
