import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromCart } from "../redux/actions/ProductActions";

export default function Cart() {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const remove = (product) => {
    console.log("removed");
    toast.warn("Removed From Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(removeFromCart(product));
  };

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui grid">
        <div className="four wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <Link to={`/product/${id}`}>
                  <div className="header">{title}</div>
                </Link>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
}
