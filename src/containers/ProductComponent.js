import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/ProductActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductComponent = () => {
  // using state to render the updated list
  const [rend, setRenders] = useState([]);
  const [rendAdded, setRendersAdded] = useState([]);

  // getting manually added and api given Products using redux states
  const products = useSelector((state) => state.allProducts.products);
  const productAdded = useSelector((state) => state.adding.array);
  const dispatch = useDispatch();

  const functionName = (id) => {
    // removing the particular id product from list
    const newRenders = rend.filter((object) => {
      return object.id !== id;
    });

    // setting newly updated list
    setRenders(newRenders);

    //   showing notification that the product  is deleted
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
    // removing the particular id product from list
    const newRenders = rendAdded.filter((object) => {
      return object.id !== id;
    });

    // setting newly updated list
    setRendersAdded(newRenders);

    //   showing notification that the product  is deleted
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
    // dispatching action of add to cart product
    dispatch(addToCart(product));

    // showing notification that the product  is added to cart
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
    // launch of all products
    setRenders(products);
    setRendersAdded(productAdded);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setRenders, products]);

  // mapping the manually added products first
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

  // mapping the products gotten from the api
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
      {/* rendering list */}
      {renderListPayload}
      {renderList}
    </>
  );
};

export default ProductComponent;
