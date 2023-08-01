import React, { useState } from "react";
import Navbar from "../Component Home/Navbar";
import CartView from "../Component Home/CartView";
import Hero from "../Component Home/HeroSection";

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
    </>
  );
};
//  درست کردن روت های دکمه کارت و دادن هاور به دکمه های اسلایدر
export default Home;
