import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/ProductActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductComponent = () => {
  const [rend, setRenders] = useState([]);
  const [rendAdded, setRendersAdded] = useState([]);

  const products = useSelector((state) => state.allProducts.products);
  const productAdded = useSelector((state) => state.adding.array);
  const dispatch = useDispatch();

  const functionName = (id) => {
    const newRenders = rend.filter((object) => {
      return object.id !== id;
    });
    setRenders(newRenders);
    console.log("newRenders", newRenders);
    toast.warn("Deleted From List", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const functionNameDelete = (id) => {
    // console.log(rendAdded);
    const newRenders = rendAdded.filter((object) => {
      return object.id !== id;
    });
    setRendersAdded(newRenders);
    console.log("newRenders", newRenders);
    toast.warn("Deleted From List", {
      position: "top-right",
      autoClose: 5000,
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
    setRenders(products);
    setRendersAdded(productAdded);
    console.log(rendAdded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRenders, products]);

  if (rendAdded) {
    var renderListPayload = rendAdded.map((product) => {
      const { id, title, image, price, category } = product;
      return (
        <div className="four wide column" key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <Link to={`/product/${id}`}>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </Link>

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
              <h2 className="ui header" onClick={() => functionNameDelete(id)}>
                <i className="large icons">
                  <i aria-hidden="true" className="delete icon"></i>
                </i>
                Delete
              </h2>
            </div>
          </div>
        </div>
      );
    });
  }

  const renderList = rend.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <Link to={`/product/${id}`}>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </Link>

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
            <h2 className="ui header" onClick={() => functionName(id)}>
              <i className="large icons">
                <i aria-hidden="true" className="delete icon"></i>
              </i>
              Delete
            </h2>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {renderListPayload}
      {renderList}
    </>
  );
};

export default ProductComponent;
