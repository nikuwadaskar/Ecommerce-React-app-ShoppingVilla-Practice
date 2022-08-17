import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sortProducts } from "../redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const [sorted, setSorted] = useState(false);

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  function unSort() {
    dispatch(fetchProducts());
    setSorted(false);
  }

  function Sort() {
    dispatch(sortProducts());
    setSorted(true);
  }
  useEffect(() => {
    unSort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="ui grid container">
      <div className="container button">
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
      {Object.keys(products).length === 0 ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <ProductComponent />
      )}
    </div>
  );
};

export default ProductPage;
