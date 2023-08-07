import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavIcones,
  NavMenu,
  NavbarContainer,
  NavbarLogo,
  NavbarSection,
  NavCol1,
  NavLink,
  IconeSearch,
  CartContainer,
  IconeCart,
  Span,
  Span2,
} from "./navbarElements";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdCart, IoMdHeartEmpty } from "react-icons/io";
const Navbar = ({ toggel, isopen }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggelHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <NavbarSection isopen={isopen} scrollNav={scrollNav}>
        <NavbarContainer>
          <NavCol1>
            <NavbarLogo
              delay={0}
              spy={true}
              smooth={true}
              onClick={toggelHome}
              to="/"
            >
              Reset TM
            </NavbarLogo>
            <NavMenu>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </NavMenu>
          </NavCol1>
          <NavIcones>
            <IconeSearch>
              <MdOutlineSearch />
            </IconeSearch>
            <CartContainer>
              <IconeCart onClick={toggel}>
                <IoMdCart />
                <Span>2</Span>
              </IconeCart>
            </CartContainer>
            <CartContainer>
              <IconeCart>
                <IoMdHeartEmpty />
                <Span2>0</Span2>
              </IconeCart>
            </CartContainer>
          </NavIcones>
        </NavbarContainer>
      </NavbarSection>
    </>
  );
};

export default Navbar;
