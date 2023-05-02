import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductListing from "./components/ProductListing/ProductListing";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import AddItemToList from "./components/AddItemToList/AddItemToList";
import AboutPage from "./components/AboutPage/AboutPage";
import CheckOutPage from "./components/CheckOutPage/CheckOutPage";
import Navbarr from "./components/Header/Navbar";
import LogIn from "./components/LogIn/LogIn";
import { useState } from "react";
import WelcomeUI from "./components/WelcomeUI/WelcomeUI";

// toaster and the routes paths
function App() {
  const [auth, setAuth] = useState(true);
  if (!auth) {
    return (
      <>
        <WelcomeUI setAuth={setAuth} />
      </>
    );
  }

  return (
    <div className="bg">
      <Router>
        <Navbarr />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          {/* <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/add-product" element={<AddItemToList />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route exact path="/aboute-project-and-me" element={<AboutPage />} />
          <Route exact path="/check-out" element={<CheckOutPage />} />
          <Route>404 Not Found</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
