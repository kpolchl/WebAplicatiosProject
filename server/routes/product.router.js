const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {deleteProduct, updateProduct, createProduct , getProduct , getProducts} = require("../controllers/product.controller");


router.get("/" ,getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);


module.exports = router;