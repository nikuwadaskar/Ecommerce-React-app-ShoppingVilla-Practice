import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  handleCartReducer,
  addingReducer,
} from "./productReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  handleCart: handleCartReducer,
  adding: addingReducer,
});
export default reducers;
