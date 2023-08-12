import React, { useState } from "react";
import Navbar from "../Component Home/Navbar";

import Footer from "../Component Home/Footer";
import CartView from "../Component Home/CartView";
import ScrollToTop from "../Scroll";

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
      <Footer isopen={isopen} />
    </>
  );
};

export default Cart;
