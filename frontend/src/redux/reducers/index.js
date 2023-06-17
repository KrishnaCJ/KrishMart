import { combineReducers } from "redux";
import {
  addToCartReducer,
  productsReducer,
  selectedProductsReducer,
} from "./cartReducer";

import { reducer } from "./productReducer";

const rootReducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart: addToCartReducer,
  reducer,
});
export default rootReducer;
