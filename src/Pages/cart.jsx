import React, { useState } from "react";
import Navbar from "../Component Home/Navbar";

import Footer from "../Component Home/Footer";
import CartView from "../Component Home/CartView";

import ContentCart from "../Component Cart/Content/indx";
import ScrollToTop from "../Component Scoroll/Scroll";
import BouttonIndex from "../Component Home/Button";

const Cart = () => {
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <ContentCart />
      <Footer />
      <BouttonIndex />
    </>
  );
};

export default Cart;
