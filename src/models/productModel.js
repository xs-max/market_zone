const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      minLength: [3, "Name should be more than two(2) characters"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "A product must belong to a user"],
    },
    price: {
      type: Number,
      required: [true, "A product must have a price"],
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: [true, "A product must have a belong to a sub-category"],
    },
    imageCover: {
      type: String,
      required: [true, "A product must have a cover image"],
    },
    images: [String],
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: [true, "A product must have a store"],
    },
    condition: {
      type: String,
      required: [true, "A product must have a location"],
    },
    negotiable: {
      type: String,
      default: "Not Negotiable",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Product", productSchema);