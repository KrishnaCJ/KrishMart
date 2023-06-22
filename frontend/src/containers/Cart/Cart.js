import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSelectedProduct,
  increaseItem,
  decreaseItem,
} from "../../redux/actions/productActions";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartList);
  console.log("cart items>>>", cartItems);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };

  const total = cartItems.reduce(addition, 0).toFixed(2);
  console.log("cart>>total", total);
  // const [product, setProduct] = useState({
  //   total,
  // });

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "payment was successful",
    });
  };

  const makePayment = (token) => {
    console.log("checkout>>token", token);

    const body = {
      token,
      total,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = axios
      .post("http://localhost:8282/payment", {
        headers,
        body: JSON.stringify(body),
      })
      .then((response) => {
        console.log("Krishna RESPONSE", response);
        const { status } = response;
        if (status === 200) {
          console.log("InSIDE IF", status);
          handleSuccess();
        }
        console.log("Krishna STATUS", status);
      })
      .catch((err) => {
        console.log(err);
      });

    return response;
  };

  return (
    <Modal onClose={props.onClose}>
      {cartItems.length > 0 &&
        cartItems.map((cartItem) => (
          <>
            <div className={classes.total} key={cartItem.id}>
              <img
                className={classes.image}
                src={cartItem.image}
                alt={cartItem.title}
              />
              <span>{cartItem.title?.substr(0, 8)}</span>
              {cartItem.quantity > 1 ? (
                <button onClick={() => dispatch(decreaseItem(cartItem))}>
                  -
                </button>
              ) : (
                <button
                  onClick={() => dispatch(deleteSelectedProduct(cartItem))}
                >
                  <i className="trash alternate outline icon"></i>
                </button>
              )}

              <span>{cartItem.quantity}</span>
              <button onClick={() => dispatch(increaseItem(cartItem))}>
                +
              </button>
              <span>
                Amount:₹{cartItem.quantity * cartItem.price.toFixed(2)}
              </span>
              <button onClick={() => dispatch(deleteSelectedProduct(cartItem))}>
                <i className="trash alternate outline icon"></i>
              </button>
            </div>
          </>
        ))}
      <div className={classes.actions}>
        {total > 0 ? (
          <>
            <div>Total Bill: {total}</div>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
          </>
        ) : (
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Continue shopping
          </button>
        )}

        {total > 1 && (
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPEKEY}
            amount={total * 100}
            token={makePayment}
            name="Buy Stripe React"
          />
        )}
        {/* {total > 1 && (
          <form action="/create-checkout-session" method="POST">
            <button type="submit">Checkout</button>
          </form>
        )} */}
      </div>
    </Modal>
  );
};

export default Cart;
