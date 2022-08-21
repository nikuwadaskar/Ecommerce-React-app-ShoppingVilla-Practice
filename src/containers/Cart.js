import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import meme from "../containers/shoppMEME.jpg";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { removeFromCart } from "../redux/actions/ProductActions";
import { Link } from "react-router-dom";

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
  // calculating sum for checkout
  const sum = () => {
    const sum1 = products.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    return sum1;
  };
  var total = sum();

  // rendering the products got from the redux state using map function
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui items" key={id}>
        <div className="item">
          <div className="ui small image">
            <img src={image} alt={id} />
          </div>
          <div className="middle aligned content">
            <div className="header">{title}</div>

            <div className="meta description">
              <span className="price">$ {price}</span>
              <br />
              <span className="stay">{category}</span>
            </div>

            <div className="extra">
              <div
                onClick={() => {
                  remove(product);
                }}
                className="ui vertical animated button ui right floated button"
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
        <hr />
      </div>
    );
  });

  if (products.length == 0) {
    return (
      <div>
        <img src={meme} className="ui centered medium image" alt="MEME" />
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/check-out">
          <div
            className="ui animated right floated fade button"
            tabIndex="0"
            style={btn}
          >
            <div className="visible content">{total} Dollars Only</div>
            <div className="hidden content">Proceed to check out</div>
          </div>
        </Link>
        <div className="ui container" style={{ margin: 90 }}>
          {renderList}
        </div>
      </div>
    );
  }
}

const btn = {
  margin: "-34px 124px 25px 20px",
};
