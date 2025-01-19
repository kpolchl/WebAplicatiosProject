const express = require("express");
const User = require("../models/user.model.js");
const router = require("express").Router();
const {getUsers,getUser ,createUser, updateUserData, deleteUser} = require("../controllers/user.controller.js");
const {addPurchase} = require("../controllers/user.controller");

router.get("/" ,getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUserData);

router.put("/:id", addPurchase);

router.delete("/:id", deleteUser);

module.exports = router;
