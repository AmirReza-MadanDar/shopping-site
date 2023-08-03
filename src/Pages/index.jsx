import React, { useState } from "react";
import Navbar from "../Component Home/Navbar";
import CartView from "../Component Home/CartView";
import Hero from "../Component Home/HeroSection";
import Banner from "../Component Home/Banner";
import Product from "../Component Home/Product";

const Home = () => {
  const [isopen, SetIsOpen] = useState(false);
  const toggel = () => {
    SetIsOpen(!isopen);
  };
  return (
    <>
      <Navbar toggel={toggel} isopen={isopen} />
      <CartView toggel={toggel} isopen={isopen} />
      <Hero isopen={isopen} />
      <Banner isopen={isopen} />
      <Product isopen={isopen} />
    </>
  );
};

export default Home;
