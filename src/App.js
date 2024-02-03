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
import NotFound from "./Components/NotFound";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const state = useSelector((state) => state);

console.log("one")
  return (
    <div className="bg">
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
