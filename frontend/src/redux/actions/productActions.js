import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  console.log("REMOVE_SELECTED_PRODUCT>>>");
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const deleteSelectedProduct = (item) => {
  console.log("delete_SELECTED_PRODUCT>>>", item);
  return {
    type: ActionTypes.DELETE_SELECTED_PRODUCT,
    payload: item,
  };
};

export const increaseItem = (item) => {
  console.log("IncreaseItem>>>", item);
  return {
    type: ActionTypes.INCREASE,
    payload: item,
  };
};

export const decreaseItem = (item) => {
  console.log("DecreaseItem>>>", item);
  return {
    type: ActionTypes.DECREASE,
    payload: item,
  };
};

export const showCart = () => {
  return {
    type: ActionTypes.SHOW_CART,
  };
};

export const addToCart = (item) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const showCartProducts = () => {
  return {
    type: ActionTypes.SHOW_PRODUCTS_IN_CART,
  };
};

export const hideCartProducts = () => {
  return {
    type: ActionTypes.HIDE_PRODUCTS_IN_CART,
  };
};

export const removeProductFromCart = (productId) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

export const selectedProduct = (product) => {
  product.quantity = 1;
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
