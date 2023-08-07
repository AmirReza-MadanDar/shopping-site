import React, { useState } from "react";
import {
  Chose,
  Chose2,
  Chose3,
  ChoseIcone,
  CloseIcone,
  QuickViewButton,
  QuickViewChose,
  QuickViewContainer,
  QuickViewDescription,
  QuickViewInputCol1,
  QuickViewInputContainer,
  QuickViewPrice,
  QuickViewSection,
  QuickViewSelectInput,
  QuickViewSliderContainer,
  QuickViewTextContainer,
  QuickViewTextTittel,
  QuickViewTextWrapper,
} from "./quickViewElements";
import CenterMode from "./quickSlider";

import { HiMiniMinusSmall } from "react-icons/hi2";
import { BiPlus } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
const QuickView = ({ show, toggel2 }) => {
  const [num, Setnum] = useState(1);

  const productImages = [
    {
      url: "../../images/quick-1.webp",
      link: "../../images/quick-1.webp",
    },
    {
      url: "../../images/quick-2.webp",
      link: "../../images/quick-2.webp",
    },
    {
      url: "../../images/quick-3.webp",
      link: "../../images/quick-3.webp",
    },
  ];
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
  return (
    <>
      <QuickViewSection show={show}>
        <CloseIcone onClick={toggel2}>
          <CgClose />
        </CloseIcone>
        <QuickViewContainer>
          <QuickViewSliderContainer>
            <CenterMode images={productImages} />
          </QuickViewSliderContainer>
          <QuickViewTextContainer>
            <QuickViewTextWrapper>
              <QuickViewTextTittel>Lightweight Jacket</QuickViewTextTittel>
              <QuickViewPrice>$58.79</QuickViewPrice>
              <QuickViewDescription>
                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                ligula. Mauris consequat ornare feugiat.
              </QuickViewDescription>
              <QuickViewInputContainer>
                <QuickViewInputCol1>
                  <label>Size</label>
                  <QuickViewSelectInput>
                    <option>Choose an option</option>
                    <option>Size S</option>
                    <option>Size M</option>
                    <option>Size L</option>
                    <option>Size XL</option>
                  </QuickViewSelectInput>
                </QuickViewInputCol1>
                <QuickViewInputCol1>
                  <label>Color</label>
                  <QuickViewSelectInput>
                    <option>Choose an option</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>White</option>
                    <option>Grey</option>
                  </QuickViewSelectInput>
                </QuickViewInputCol1>
                <QuickViewChose>
                  <Chose onClick={handelMinusNum}>
                    <ChoseIcone>
                      <HiMiniMinusSmall />
                    </ChoseIcone>
                  </Chose>
                  <Chose2>{num}</Chose2>
                  <Chose3 onClick={handelPlusNum}>
                    <ChoseIcone>
                      <BiPlus />
                    </ChoseIcone>
                  </Chose3>
                </QuickViewChose>
                <QuickViewButton>ADD TO CART</QuickViewButton>
              </QuickViewInputContainer>
            </QuickViewTextWrapper>
          </QuickViewTextContainer>
        </QuickViewContainer>
      </QuickViewSection>
    </>
  );
};

export default QuickView;
