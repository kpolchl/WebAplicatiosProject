const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.router.js");
const UserRoute = require("./routes/user.router.js");

const app = express();
app.use(express.json());

app.use("/api/products" , ProductRoute);

app.use("/api/users", UserRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin@backeenddb.yqvmi.mongodb.net/?retryWrites=true&w=majority&appName=BackeendDB",
  )
  .then(() => {
    console.log("Connected to the Database!");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Error: ");
  });
