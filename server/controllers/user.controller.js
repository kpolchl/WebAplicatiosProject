const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const options = { new: true, runValidators: true };

    const user = await User.findByIdAndUpdate(id, req.body, options);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = User.findByIdAndDelete(id);
    if (!User) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addPurchase = async (userId, productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  await User.findByIdAndUpdate(
    userId,
    {
      $push: {
        PurchaseHistory: {
          productId: product._id,
          name: product.name,
          purchaseDate: new Date()
        }
      }
    },
    { new: true }
  );
};


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUserData,
  deleteUser,
  addPurchase,
};

