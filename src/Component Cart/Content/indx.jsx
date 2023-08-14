import React, { useState } from "react";
import {
  ButtonCol1,
  ButtonCol2,
  ButtonInput,
  ButtonTeble,
  Chose,
  Chose2,
  Chose3,
  ChoseIcone,
  Col1Detailes,
  Col1Text,
  ContentContainer,
  ContentSection,
  DetailesCol3Button,
  DetailesContainer,
  DetailesTextCol1,
  DetailesTextContainer,
  DetailesTittelCol1,
  DetailesWrapper,
  DetaolsInput,
  DrtailseCol3,
  InputButton,
  InputContainer,
  InputcolTittel,
  PriceCol,
  PriceText,
  ProductCol,
  ProductImg,
  ProductText,
  QuantityCol,
  QuantityContent,
  SelectInput,
  SubtotalPrice,
  SubtotalText,
  TabaleContainer,
  TabaleContentcol2,
  TableContentcol1,
  TableTextWrapper,
  TableTittel1,
  TableTittel2,
  TableTittel3,
  TextCotainer,
  TextTittel,
  Tittel1,
} from "./contentElements";
import img1 from "../../images/cart-1.webp";
import img2 from "../../images/quick-2.webp";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";

const ContentCart = ({ isopen }) => {
  const [num, Setnum] = useState(1);
  const [number, Setnumber] = useState(1);
  const handelPlusNum = () => {
    if (true) {
      Setnum(num + 1);
    }
  };
  const handelMinusNum = () => {
    if (true) {
      Setnum(num - 1);
    }
    if (num === 1) {
      Setnum(num);
    }
  };

  const handelPlusNum2 = () => {
    if (true) {
      Setnumber(number + 1);
    }
    console.log("yes");
  };
  const handelMinusNum2 = () => {
    if (true) {
      Setnumber(number - 1);
    }
    if (number === 1) {
      Setnumber(number);
    }
  };
  return (
    <>
      <ContentSection>
        <ContentContainer>
          <TabaleContainer>
            <TableTextWrapper>
              <TableTittel1>
                <TextTittel>PRODUCT </TextTittel>
              </TableTittel1>
              <TableTittel2>
                <TextTittel> PRICE </TextTittel>
              </TableTittel2>
              <TableTittel3>
                <TextTittel> QUANTITY </TextTittel>
              </TableTittel3>
              <TableTittel2>
                <TextTittel> TOTAL </TextTittel>
              </TableTittel2>
            </TableTextWrapper>
            <TableContentcol1>
              <ProductCol>
                <ProductImg isopen={isopen} src={img1} />
                <ProductText> Fresh Strawberries</ProductText>
              </ProductCol>
              <PriceCol>
                <PriceText>$ 36.00</PriceText>
              </PriceCol>
              <QuantityCol>
                <QuantityContent>
                  <Chose onClick={handelMinusNum}>
                    <ChoseIcone>
                      <HiMiniMinusSmall />
                    </ChoseIcone>
                  </Chose>
                  <Chose2 isopen={isopen}>{num}</Chose2>
                  <Chose3 onClick={handelPlusNum}>
                    <ChoseIcone>
                      <BiPlus />
                    </ChoseIcone>
                  </Chose3>
                </QuantityContent>
              </QuantityCol>
              <PriceCol>
                <PriceText>$ 36.00</PriceText>
              </PriceCol>
            </TableContentcol1>
            <TableContentcol1>
              <ProductCol>
                <ProductImg isopen={isopen} src={img2} />
                <ProductText> Lightweight Jacket</ProductText>
              </ProductCol>
              <PriceCol>
                <PriceText>$ 16.00</PriceText>
              </PriceCol>
              <QuantityCol>
                <QuantityContent>
                  <Chose onClick={handelMinusNum2}>
                    <ChoseIcone>
                      <HiMiniMinusSmall />
                    </ChoseIcone>
                  </Chose>
                  <Chose2 isopen={isopen}>{number}</Chose2>
                  <Chose3 onClick={handelPlusNum2}>
                    <ChoseIcone>
                      <BiPlus />
                    </ChoseIcone>
                  </Chose3>
                </QuantityContent>
              </QuantityCol>
              <PriceCol>
                <PriceText>$ 16.00</PriceText>
              </PriceCol>
            </TableContentcol1>
            <TabaleContentcol2>
              <ButtonCol1>
                <ButtonInput
                  isopen={isopen}
                  type="text"
                  placeholder="Coupon Code"
                />
                <ButtonTeble isopen={isopen}>APPLY COUPON</ButtonTeble>
              </ButtonCol1>
              <ButtonCol2>
                <ButtonTeble isopen={isopen}>UPDATE CART</ButtonTeble>
              </ButtonCol2>
            </TabaleContentcol2>
          </TabaleContainer>
          <DetailesContainer>
            <DetailesWrapper>
              <DetailesTittelCol1>
                <Tittel1>CART TOTALS</Tittel1>
                <TextCotainer>
                  <SubtotalText>Subtotal:</SubtotalText>
                  <SubtotalPrice>$79.65</SubtotalPrice>
                </TextCotainer>
              </DetailesTittelCol1>
              <DetailesTextContainer>
                <DetailesTextCol1>
                  <Col1Text>Shipping:</Col1Text>
                  <Col1Detailes>
                    There are no shipping methods available. Please double check
                    your address, or contact
                  </Col1Detailes>
                </DetailesTextCol1>
                <InputContainer>
                  <InputcolTittel>CALCULATE SHIPPING</InputcolTittel>
                  <SelectInput>
                    <option>Select a country...</option>
                    <option>USA</option>
                    <option>UK</option>
                  </SelectInput>
                  <DetaolsInput type="text" placeholder="state /   country" />
                  <DetaolsInput type="text" placeholder="Postcode /   Zip" />
                  <InputButton>UPDATE TOTALS</InputButton>
                </InputContainer>
              </DetailesTextContainer>
              <DrtailseCol3>
                <TextCotainer>
                  <SubtotalText>Total:</SubtotalText>
                  <SubtotalPrice>$79.65</SubtotalPrice>
                </TextCotainer>
                <DetailesCol3Button>Proceed to Checkout</DetailesCol3Button>
              </DrtailseCol3>
            </DetailesWrapper>
          </DetailesContainer>
        </ContentContainer>
      </ContentSection>
    </>
  );
};

export default ContentCart;
