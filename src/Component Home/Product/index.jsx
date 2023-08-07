import React from "react";
import {
  ProductContainer,
  ProductSection,
  ProductText,
} from "./productElements";
import TabMenu from "./tabsMenu";

const Product = ({ isopen, toggel2 }) => {
  return (
    <>
      <ProductSection isopen={isopen}>
        <ProductContainer>
          <ProductText>PRODUCT OVERVIEW</ProductText>
          <TabMenu isopen={isopen} toggel2={toggel2} />
        </ProductContainer>
      </ProductSection>
    </>
  );
};

export default Product;
