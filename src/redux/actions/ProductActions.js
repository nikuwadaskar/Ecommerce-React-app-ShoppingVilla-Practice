import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-type";

//  various actions

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeStoreApi.get("/products");
      console.log(response)
      if (response.status!="200") {
        throw new Error(`Error fetching products. Status: ${response.status}`);
      }

      dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle the error as needed (e.g., dispatch an error action)
    }
  };
};

export const sortProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fakeStoreApi.get("/products?sort=desc");

      if (response.status!="200") {
        throw new Error(`Error sorting products. Status: ${response.status}`);
      }

      dispatch({ type: ActionTypes.SORT_PRODUCTS, payload: response.data });
    } catch (error) {
      console.error("Error sorting products:", error);
      // Handle the error as needed (e.g., dispatch an error action)
    }
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

export const countDown = (id) => {
  return {
    type: ActionTypes.COUNT_DOWN,
    payload: id,
  };
};
export const countUp = (id) => {
  return {
    type: ActionTypes.COUNT_UP,
    payload: id,
  };
};
