import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";

const Checkout = (props) => {
  const [product, setProduct] = useState({
    name: "Stripe payment",
    price: props.total,
    ProductBy: "stripefromFB",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Chekout with stripe</h1>

      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPEKEY}
        token={makePayment}
        name="Buy Stripe React"
        amount={product.price * 100}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default Checkout;
