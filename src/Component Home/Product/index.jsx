import React from "react";
import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductSection,
  ProductText,
} from "./productElements";
import TabMenu from "./tabsMenu";

const Product = ({ toggel2 }) => {
  const location = useLocation();
  const isActive = location.pathname !== "/shop";

  return (
    <>
      <ProductSection>
        <ProductContainer>
          {isActive && <ProductText>PRODUCT OVERVIEW</ProductText>}
          <TabMenu toggel2={toggel2} />
        </ProductContainer>
      </ProductSection>
    </>
  );
};

export default Product;
