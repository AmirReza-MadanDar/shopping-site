import React from "react";
import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductSection,
  ProductText,
} from "./productElements";
import TabMenu from "./tabsMenu";

const Product = ({ isopen, toggel2 }) => {
  const location = useLocation();
  const isActive = location.pathname !== "/shop"; // دریافت وضعیت فعلی مسیر (آیا مسیر /shop فعال است یا خیر)

  return (
    <>
      <ProductSection isopen={isopen}>
        <ProductContainer>
          {isActive && <ProductText>PRODUCT OVERVIEW</ProductText>}
          <TabMenu isopen={isopen} toggel2={toggel2} />
        </ProductContainer>
      </ProductSection>
    </>
  );
};

export default Product;
