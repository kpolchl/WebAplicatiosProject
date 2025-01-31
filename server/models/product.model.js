const mongoose = require("mongoose");

const orderHistorychema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", orderHistorychema);

module.exports = Product;
