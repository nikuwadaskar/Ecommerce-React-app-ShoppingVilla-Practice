import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromCart } from "../redux/actions/ProductActions";

export default function Cart() {
  // getting cart product from redux state
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const remove = (product) => {
    // giving notification that product is removed from cart
    toast.warn("Removed From Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // dispatching the remove action
    dispatch(removeFromCart(product));
  };

  // rendering the products got from the redux state using map function
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={id} />
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
    );
  });
  return <>{renderList}</>;
}
