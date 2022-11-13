const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {
        type: 'String',
        required: true
    },
    thumbnail: {
        data: Buffer,
        contentType: String
    },
    image: {
        data: Buffer,
        contentType: String
    },
    price: {
        type: 'String',
        required: true
    },
    form: {
        type: 'String',
        required: true
    },
    size: {
        type: 'String',
        required: true
    },
    material: {
        type: 'String',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Products', ProductSchema);