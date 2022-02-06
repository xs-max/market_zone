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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: [true, "A product must have a belong to a category"]
    },
    imageCover: {
        type: String,
        required: [true, 'A product must have a cover image']
    },
    images: [String],
   
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