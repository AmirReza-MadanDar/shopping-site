import React from "react";
import { BannerContainer, BannerSection } from "./bannerElements";
import Cart from "./cart";
import img5 from "../../images/5.png";
import img6 from "../../images/2.png";
import img7 from "../../images/6.png";
const Banner = ({ isopen }) => {
  return (
    <>
      <BannerSection isopen={isopen}>
        <BannerContainer>
          <Cart
            isopen={isopen}
            nameText="Women"
            collction="Spring 2023"
            img={img5}
          />
          <Cart
            isopen={isopen}
            nameText="Men"
            collction="Spring 2023"
            img={img6}
          />
          <Cart
            isopen={isopen}
            nameText="Accessories"
            collction="New Trend"
            img={img7}
          />
        </BannerContainer>
      </BannerSection>
    </>
  );
};

export default Banner;
