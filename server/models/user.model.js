const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    password: { type: String, required: true },
    profilePic: { type: String, default: "default-profile-pic-url.jpg" },
    PurchaseHistory: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        name: { type: String, required: true },
        purchaseDate: { type: Date, required: true, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
