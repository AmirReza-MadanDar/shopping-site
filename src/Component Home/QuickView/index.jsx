import React from "react";
import {
  QuickViewContainer,
  QuickViewSection,
  QuickViewSliderContainer,
} from "./quickViewElements";
import CenterMode from "./quickSlider";

const QuickView = () => {
  const productImages = [
    {
      url: "../../images/quick-1.webp",
      link: "../../images/q1.webp",
    },
    {
      url: "../../images/q2.webp",
      link: "../../images/q2.webp",
    },
    {
      url: "../../images/q3.webp",
      link: "../../images/q3.webp",
    },
  ];

  return (
    <>
      <QuickViewSection>
        <QuickViewContainer>
          <QuickViewSliderContainer>
            <CenterMode images={productImages} />
          </QuickViewSliderContainer>
        </QuickViewContainer>
      </QuickViewSection>
    </>
  );
};

export default QuickView;
