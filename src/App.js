import React from "react";
import ProductListing from "./components/productListing/productListing";
import CartList from "./components/carts/CartList";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<ProductListing />} />
      <Route exact path="/cart" element={<CartList />} />

    </Routes>
    </Router>
    // <>
    //   <Header/>
    //   <ProductListing/>
    // </>
  )
}
export default App;
