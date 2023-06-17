//jshint esversion:6
const cors = require("cors");
const express = require("express");
require("dotenv").config();
//TODO:add a stripe key
const stripe = require("stripe")(process.env.SECRET_KEY);
//Instiate the app through Express method
const app = express();
///middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("It works at learning");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT", product);
  console.log("PRICE", product.price);

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.paymentIntents
        .create({
          amount: product.price * 100,
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
