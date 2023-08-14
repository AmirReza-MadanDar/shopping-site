import React, { useState, useEffect } from "react";
import Navbar from "../Component Home/Navbar";
import Product from "../Component Home/Product";
import CartView from "../Component Home/CartView";
import QuickView from "../Component Home/QuickView";
import Footer from "../Component Home/Footer";

import ScrollToTop from "../Scroll";

const Shop = ({ location }) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [isActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleQuickView = () => {
    setShowQuickView((prevShowQuickView) => !prevShowQuickView);
  };
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <QuickView show={showQuickView} toggel2={toggleQuickView} />
      <Product toggel2={toggleQuickView} isActive={isActive} />
      <Footer />
    </>
  );
};

export default Shop;
