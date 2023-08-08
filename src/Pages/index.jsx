import React, { useState } from "react";
import Navbar from "../Component Home/Navbar";
import CartView from "../Component Home/CartView";
import Hero from "../Component Home/HeroSection";
import Banner from "../Component Home/Banner";
import Product from "../Component Home/Product";
import QuickView from "../Component Home/QuickView";
import Footer from "../Component Home/Footer";

const Home = () => {
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };
  const [show, SetShow] = useState(false);
  const toggel2 = () => {
    SetShow(!show);
  };
  return (
    <>
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <Hero isopen={isopen} />
      <Banner isopen={isopen} />
      <QuickView show={show} toggel2={toggel2} />
      <Product isopen={isopen} toggel2={toggel2} />
      <Footer isopen={isopen} />
    </>
  );
};

export default Home;
