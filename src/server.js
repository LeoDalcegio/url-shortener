const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const routes = require('./routes');
const dotenv = require('dotenv')

const app = express();

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}),
() => console.log('Connected to db!');

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(process.env.PORT || 3000, () => console.log('Server Up and running'));
