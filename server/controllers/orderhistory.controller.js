
const OrderHistory = require(`../models/orderhistory.model.js`);

const getOrderHistories = async (req, res) => {
  try {
    const orders = await OrderHistory.find({});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserOrderHistory = async (req, res) => {
  try {
    const {userId} = req.body;
    const orders = await OrderHistory.find({userId});
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const order = await OrderHistory.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getUserOrderHistory,
  getOrderHistories,
  createOrder,
};
