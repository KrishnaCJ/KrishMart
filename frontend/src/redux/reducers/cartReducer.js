import { ActionTypes } from "../constants/action-types";

const intialState = {
  cartList: [],
  products: [],
  count: 0,
  total: 0,
};

export const addToCartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      let tc = state.cartList.filter((item) => item.id === payload.id);
      if (tc < 1) {
        return {
          ...state,
          count: state.count + 1,
          total: state.total + payload.price,
          cartList: [...state.cartList, payload],
        };
      }
      break;

    case ActionTypes.DELETE_SELECTED_PRODUCT:
      return {
        cartList: state.cartList.filter((item) => item.id !== payload.id),
      };

    case ActionTypes.INCREASE:
      return {
        cartList: state.cartList.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity + 1 }
            : item
        ),
      };

    case ActionTypes.DECREASE:
      return {
        cartList: state.cartList.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductsReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const removeFromCartReducer = (
  state = intialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
        cartList: state.cartList.filter((item) => item.id !== payload.id),
        total: state.total > 0 ? state.total - payload.price : 0,
      };

    default:
      return state;
  }
};
