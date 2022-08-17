import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCart,
  fetchProduct,
  removeFromCart,
  removeSelectedProduct,
} from "../redux/actions/ProductActions";
const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  let cartItem = useSelector((state) => state.handleCart);
  const exists = cartItem.find((x) => x.id === product.id);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const remove = (product) => {
    dispatch(removeFromCart(product));
    toast.warn("Removed From Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const add = (product) => {
    dispatch(addToCart(product));
    toast.success("Product Added to Cart Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div class="ui active centered inline loader"></div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} alt="product" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <p className="ui teal tag label">${price}</p>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {!exists ? (
                  <div
                    onClick={() => {
                      add(product);
                    }}
                    className="ui vertical animated button"
                    tabIndex="0"
                  >
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      remove(product);
                    }}
                    className="ui vertical animated button"
                    tabIndex="0"
                  >
                    <div className="hidden content">
                      <i className="remove icon"></i>
                    </div>
                    <div className="visible content">Remove From Cart</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
