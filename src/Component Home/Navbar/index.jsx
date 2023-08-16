import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
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

const Navbar = ({ toggel }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveItem("home");
    } else if (location.pathname === "/shop") {
      setActiveItem("shop");
    } else if (location.pathname === "/cart") {
      setActiveItem("cart");
    } else if (location.pathname === "/blog") {
      setActiveItem("blog");
    } else if (location.pathname === "/about") {
      setActiveItem("about");
    } else if (location.pathname === "/contact") {
      setActiveItem("contact");
    }
  }, [location]);

  const handleClick = (item) => {
    setActiveItem(item);
    if (item === "home") {
      scroll.scrollToTop();
    }
  };

  return (
    <NavbarSection scrollNav={scrollNav}>
      <NavbarContainer>
        <NavCol1>
          <NavbarLogo
            delay={0}
            spy={true}
            smooth={true}
            onClick={() => handleClick("home")}
            to="/"
          >
            Reset TM
          </NavbarLogo>
          <NavMenu>
            <NavLink
              onClick={() => handleClick("home")}
              className={activeItem === "home" ? "active" : ""}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => handleClick("shop")}
              className={activeItem === "shop" ? "active" : ""}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              onClick={() => handleClick("cart")}
              className={activeItem === "cart" ? "active" : ""}
              to="/cart"
            >
              Cart
            </NavLink>
            <NavLink
              onClick={() => handleClick("blog")}
              className={activeItem === "blog" ? "active" : ""}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={() => handleClick("about")}
              className={activeItem === "about" ? "active" : ""}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => handleClick("contact")}
              className={activeItem === "contact" ? "active" : ""}
              to="/contact"
            >
              Contact
            </NavLink>
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
  );
};

export default Navbar;
