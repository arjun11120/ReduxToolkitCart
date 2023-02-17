import React from "react";
import ProductListing from "./components/productListing/productListing";
import CartList from "./components/carts/CartList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </Router>
  )
}
export default App;
