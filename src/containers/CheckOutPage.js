import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import meme from "../containers/ThankYou.jpg";

export default function CheckOutPage() {
  const [submitt, setSubmitt] = useState(false);
  const products = useSelector((state) => state.handleCart);

  const sum = () => {
    const sum1 = products.reduce((accumulator, object) => {
      return accumulator + object.price;
    }, 0);
    return sum1;
  };
  var total = sum();
  const submited = () => {
    console.log(submitt);
    setSubmitt(true);
    console.log(submitt);
  };
  // useEffect(() => {

  // }, [submitt,setSubmitt]);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="ui relaxed items" key={id}>
        <div className="item">
          <div className="ui tiny image">
            <img src={image} />
          </div>

          <div className="middle aligned content">
            <Link to={`/product/${id}`}>
              <span className=" ui header">{title}</span>
            </Link>
          </div>

          <div className="ui header">{price} $</div>
        </div>
      </div>
    );
  });
  if (submitt) {
    return (
      <div>
        <img src={meme} className="ui centered medium image" alt="MEME" />
      </div>
    );
  } else {
    return (
      <div className="ui container" style={ctn}>
        <form className="ui form">
          <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field">
            <label>Name</label>
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="shipping[first-name]"
                  placeholder="First Name"
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="shipping[last-name]"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Billing Address</label>
            <div className="fields">
              <div className="twelve wide field">
                <input
                  type="text"
                  name="shipping[address]"
                  placeholder="Street Address"
                />
              </div>
              <div className="four wide field">
                <input
                  type="text"
                  name="shipping[address-2]"
                  placeholder="Apt #"
                />
              </div>
            </div>
          </div>
          <h4 className="ui dividing header">Order Summary</h4>
          {renderList}

          <div className="ui  right floated  button" tabIndex="0" style={btn}>
            <div className="visible content">{total} Dollars Only</div>
            {/* <div className="hidden content">Proceed to check out</div> */}
          </div>
          <div
            onClick={() => {
              submited();
            }}
            className="ui button"
            tabIndex="0"
          >
            Submit Order
          </div>
        </form>
      </div>
    );
  }
}

const btn = {
  backgroundColor: "white",
};

const ctn = { paddingBottom: "90px" };