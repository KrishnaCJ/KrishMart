//jshint esversion:6
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//TODO:add a stripe key
const stripe = require("stripe")(process.env.SECRET_KEY);
//Instiate the app through Express method
const app = express();
///middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error(err));
//routes
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("It works at learning");
});

app.post("/payment", (req, res) => {
  console.log("server>>", req);
  const { total, token } = req.body;
  console.log("token", token);
  console.log("PRICE", amount);

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.paymentIntents
        .create({
          amount: total,
          currency: "USD",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
        })
        .then((result) => {
          console.log("Krishna result", result);
          res.status(200).json(result);
        })
        .catch((err) => console.log(err));
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening on port ${port}!`));
