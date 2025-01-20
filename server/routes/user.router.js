const express = require("express");
const router = require("express").Router();
const {getUsers,getUser ,createUser, updateUserData, deleteUser ,addPurchase} = require("../controllers/user.controller.js");

router.get("/" ,getUsers);

router.get("/:id", getUser);

router.post("/register", createUser);

router.put("/:id", updateUserData);

router.put("/:id", addPurchase);

router.delete("/:id", deleteUser);

module.exports = router;
