import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  handleCartReducer,
  addingReducer,
} from "./productReducer";

// combining all the reducers
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  handleCart: handleCartReducer,
  adding: addingReducer,
});
export default reducers;
