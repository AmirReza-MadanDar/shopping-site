import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component Scoroll/Scroll";
import Home from "./Pages";
import Shop from "./Pages/shop";
import Cart from "./Pages/cart";
import Blog from "./Pages/blog";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Page404 from "./Pages/notFound";
import "./App.css";
import "./loading.css";
import loading from "./images/15.gif";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div className="page-content">
      {isLoading ? (
        <div className="loading">
          <img src={loading} alt="Loading..." />
        </div>
      ) : (
        <>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
};

export default App;
