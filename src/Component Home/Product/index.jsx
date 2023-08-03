import React from "react";
import {
  ProductContainer,
  ProductSection,
  ProductText,
} from "./productElements";
import TabMenu from "./tabsMenu";

const Product = ({ isopen }) => {
  return (
    <>
      <ProductSection isopen={isopen}>
        <ProductContainer>
          <ProductText>PRODUCT OVERVIEW</ProductText>
          <TabMenu isopen={isopen} />
        </ProductContainer>
      </ProductSection>
    </>
  );
};

export default Product;
