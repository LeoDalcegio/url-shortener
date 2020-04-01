const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ShortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
},{
    timestamps: true
});


ShortUrlSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);