import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-type";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};
export const sortProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get("/products?sort=desc");
    dispatch({ type: ActionTypes.SORT_PRODUCTS, payload: response.data });
  };
};
export const fetchProduct = (id) => {
  return async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };
};
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const addProduct = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const addToCart = (product) => {
  // console.log(product);
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (product) => {

  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
