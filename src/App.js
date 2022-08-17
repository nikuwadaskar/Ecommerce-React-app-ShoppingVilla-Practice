import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./containers/Cart";
import AddItemToList from "./containers/AddItemToList";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/add-product" element={<AddItemToList />} />
        <Route exact path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </Router>
  );
}

export default App;
