const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const ProductRoute = require("./routes/product.router.js");
const UserRoute = require("./routes/user.router.js");
const OrderRoute = require("./routes/orderhistroy.router.js");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();
app.use(express.json());

app.use(cors(corsOptions));

app.use("/products", ProductRoute);

app.use("/users", UserRoute);

app.use("/orders", OrderRoute);

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

