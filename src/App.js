import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import ProductListing from "./Components/ProductListing";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Cart";
import AddItemToList from "./Components/AddItemToList";
import AboutPage from "./Components/AboutPage";
import CheckOutPage from "./Components/CheckOutPage";
import Navbarr from "./Components/Navbar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [url, setUrl] = useState("");
  const state = useSelector((state) => state);

  useEffect(() => {
    if (window.location.pathname) {
      setUrl(window.location.pathname);
    }
  }, []);

  return (
    <div className="bg">
      <Router>
        <Navbarr />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-product" element={<AddItemToList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/about-project-and-me" element={<AboutPage />} />
          {state?.handleCart?.length > 0 && (
            <Route path="/check-out" element={<CheckOutPage />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

export default App;
