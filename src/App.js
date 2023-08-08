import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop";
import ScrollToTop from "./Scroll";
import Cart from "./Pages/cart";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
