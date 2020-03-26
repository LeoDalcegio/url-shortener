const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dbUser-Leo:dbUser-leo@url-shortener-tmd3n.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(process.env.PORT || 5000);
