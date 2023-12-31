import React, { useState } from "react";

import Navbar from "../Component Home/Navbar";
import CartView from "../Component Home/CartView";
import Footer from "../Component Home/Footer";
import ContactContent from "../Componnet Contact";
import ScrollToTop from "../Component Scoroll/Scroll";
import BouttonIndex from "../Component Home/Button";

const Contact = () => {
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <ContactContent />
      <Footer />
      <BouttonIndex />
    </>
  );
};

export default Contact;
