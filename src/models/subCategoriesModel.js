const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "A product must have a category"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;