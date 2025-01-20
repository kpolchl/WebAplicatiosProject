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
          purchaseDate: new Date() // Explicitly set the purchase date
        }
      }
    },
    { new: true }
  );
};

const loginController = async (req, res) => {
  const { email } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(401).json({
        status: "failed",
        data: [],
        message: "Account does not exist",
      });
    // if user exists
    // validate password
    const isPasswordValid = await bcrypt.compare(
      `${req.body.password}`,
      user.password
    );
    // if not valid, return unathorized response
    if (!isPasswordValid)
      return res.status(401).json({
        status: "failed",
        data: [],
        message:
          "Invalid email or password. Please try again with the correct credentials.",
      });

    let options = {
      maxAge: 20 * 60 * 1000, // would expire in 20minutes
      httpOnly: true, // The cookie is only accessible by the web server
      secure: true,
      sameSite: "None",
    };
    const token = user.generateAccessJWT(); // generate session token for user
    res.cookie("SessionID", token, options); // set the token to response header, so that the client sends it back on each subsequent request
    res.status(200).json({
      status: "success",
      message: "You have successfully logged in.",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUserData,
  deleteUser,
  addPurchase,
  loginController
};

