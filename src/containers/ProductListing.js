import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sortProducts } from "../redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  // setting sort state to false initially
  const [sorted, setSorted] = useState(false);

  // getting products from redux state
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  function unSort() {
    // sending request to get unsorted products
    dispatch(fetchProducts());
    setSorted(false);
  }

  function Sort() {
    // sending API request to get sorted product
    dispatch(sortProducts());
    setSorted(true);
  }
  useEffect(() => {
    unSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // rendering the products
  return (
    <div className="ui grid container">
      <div className="container button">
        {/* checking sort condition to show relevant button  */}
        {!sorted ? (
          <button onClick={() => Sort()} className="ui button">
            Sort Desc
          </button>
        ) : (
          <button onClick={() => unSort()} className="ui button">
            Sort Asc
          </button>
        )}
      </div>

      {/* checking condition to show loader */}
      {Object.keys(products).length === 0 ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <div className="ui grid container">
          <ProductComponent />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
