import { ActionTypes } from "../constants/action-types";

export const reducer = (cart = [], { type, payload }) => {
  if (type === ActionTypes.ADD_TO_CART) {
    let tempcart = cart.filter((item) => item.id === payload.id);
    if (tempcart < 1) {
      return [...cart, payload];
    } else {
      return cart;
    }
  }
  if (type === ActionTypes.REMOVE) {
    return cart.filter((item) => item.id !== payload.id);
  }
  if (type === ActionTypes.INCREASE) {
    let tempcart = cart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
  }
  if (type === ActionTypes.DECREASE) {
    let tempcart = cart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart;
};
