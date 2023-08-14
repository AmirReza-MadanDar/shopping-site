import React from "react";
import {
  CartButton,
  CartCollactionText,
  CartContainer,
  CartImage,
  CartImageContainer,
  CartNameText,
  CartTextContainer,
  CartTextWrapper,
} from "./cartElements";

const Cart = ({ nameText, collction, img }) => {
  return (
    <>
      <CartContainer to={"/shop"}>
        <CartTextContainer>
          <CartTextWrapper>
            <CartNameText>{nameText}</CartNameText>
            <CartCollactionText>{collction}</CartCollactionText>
          </CartTextWrapper>
          <CartButton to={"/shop"}>shop Now</CartButton>
        </CartTextContainer>
        <CartImageContainer>
          <CartImage src={img}></CartImage>
        </CartImageContainer>
      </CartContainer>
    </>
  );
};

export default Cart;
