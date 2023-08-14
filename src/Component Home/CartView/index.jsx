import React from "react";
import {
  CartDetailseContainer,
  CartViewCol1,
  CartViewCol2,
  CartViewContainer,
  CartViewSection,
  CartViewText,
  CloseIcone,
  CartShowing,
  CartImage,
  CartTextWrraper,
  ProductName,
  ProductPrize,
  CartViewCol3,
  CartTotal,
  ButtonContainer,
  CartButton,
  CartContainer,
} from "./CartViewElements";
import img1 from "../../images/1.jpg";
import { MdOutlineClose } from "react-icons/md";
const CartView = ({ toggel, isopen }) => {
  return (
    <>
      <CartViewSection onClick={toggel} isopen={isopen}>
        <CartContainer isopen={isopen}>
          <CartViewContainer>
            <CartViewCol1>
              <CartViewText>YOUR CART</CartViewText>
              <CloseIcone onClick={toggel}>
                <MdOutlineClose />
              </CloseIcone>
            </CartViewCol1>
            <CartViewCol2>
              <CartDetailseContainer>
                <CartShowing>
                  <CartImage src={img1} />
                  <CartTextWrraper>
                    <ProductName>White Shirt Pleat</ProductName>
                    <ProductPrize>1 x $19.00</ProductPrize>
                  </CartTextWrraper>
                </CartShowing>
                <CartShowing>
                  <CartImage src={img1} />
                  <CartTextWrraper>
                    <ProductName>White Shirt Pleat</ProductName>
                    <ProductPrize>1 x $19.00</ProductPrize>
                  </CartTextWrraper>
                </CartShowing>
                <CartShowing>
                  <CartImage src={img1} />
                  <CartTextWrraper>
                    <ProductName>White Shirt Pleat</ProductName>
                    <ProductPrize>1 x $19.00</ProductPrize>
                  </CartTextWrraper>
                </CartShowing>
              </CartDetailseContainer>
            </CartViewCol2>
          </CartViewContainer>
          <CartViewCol3>
            <CartTotal>Total: $75.00</CartTotal>
            <ButtonContainer>
              <CartButton to={"/cart"}>View Cart</CartButton>
              <CartButton to={"/cart"}>Check Out</CartButton>
            </ButtonContainer>
          </CartViewCol3>
        </CartContainer>
      </CartViewSection>
    </>
  );
};

export default CartView;
