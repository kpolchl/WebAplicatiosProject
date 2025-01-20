const express = require("express");
const Product = require("../models/product.model.js");
const {getOrderHistories, getUserOrderHistory, createOrder} = require("../controllers/orderhistory.controller");
const router = express.Router();


router.get("/" , getOrderHistories);

router.get("/user", getUserOrderHistory);

router.post("/cart", createOrder);

module.exports = router;