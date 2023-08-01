import React from "react";
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
  return (
    <>
      <NavbarSection isopen={isopen}>
        <NavbarContainer>
          <NavCol1>
            <NavbarLogo to="/">Reset TM</NavbarLogo>
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
