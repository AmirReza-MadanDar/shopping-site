import React, { useState } from "react";
import ScrollToTop from "../Scroll";
import Navbar from "../Component Home/Navbar";
import CartView from "../Component Home/CartView";
import Footer from "../Component Home/Footer";
import BlogContent from "../Component Blog/Blog";

const Blog = () => {
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <BlogContent />
      <Footer />
    </>
  );
};

export default Blog;
