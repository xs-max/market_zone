const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'A product must have a name'],
        minLength: [3, 'Name should be more than two(2) characters'],
        trim: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A product must belong to a user']
    },
    price: {
        type: Number,
        required: [true, 'A product must have a price']
    },
    imageCover: {
        type: String,
        required: [true, 'A product must have a cover image']
    },
    images: [String],
    location: {
        type: mongoose.Schema.ObjectId,
        ref: 'Location',
        required: [true, 'A product must have a location'],
    },
    condition: {
        type: String,
        required: [true, 'A product must have a location']
    },
    negotiable: {
        type: String,
        default: 'Not Negotiable'
    }

},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});