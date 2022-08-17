import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../redux/actions/ProductActions";

function CreateProduct() {
  const [id, setId] = useState(21);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  //   const { addToast } = useToasts();
  const adding = () => {
    const data = [
      {
        id: id,
        title: title,
        price: price,
        description: description,
        image: image,
        category: category,
      },
    ];
    dispatch(addProduct(data));
    setId(id + 1);
    toast.success("Product Added List Successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ height: "70%" }}>
      <form className="justify-content-center" style={{ marginLeft: "25%" }}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Title</label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Title"
              required
              //   onChange={handleTitle}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div
            className="form-group col-md-10"
            style={{ marginTop: "2%", marginBottom: "2%" }}
          >
            <label htmlFor="product-image">Select image for product</label>
            <input
              type="file"
              style={{ marginLeft: "16%" }}
              className="form-control-file"
              id="product-image"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              className="form-control"
              id="rating"
              placeholder="Rating"
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div onClick={adding}>
          <button type="button" className="btn btn-primary mt-4">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
