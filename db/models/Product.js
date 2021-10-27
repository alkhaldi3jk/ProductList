const mongoose = require("mongoose");
const mongooseSlugPlugin = require('mongoose-slug-plugin');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: { type: String },
    image: { type: String },
    price: { type: Number, defult: 5 },
    description: { type: String },
    color: { type: String },
    quantity: { type: Number, min: 0 },
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: '<%=name%>' })

module.exports = mongoose.model("Product", ProductSchema);
