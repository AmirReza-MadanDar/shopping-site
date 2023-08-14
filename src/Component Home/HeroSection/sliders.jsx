import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliders.css";
import img2 from "../../images/2.png";
import img3 from "../../images/3.png";
import img4 from "../../images/4.png";

import {
  ButtonLink,
  Div,
  ImagContainer,
  Image,
  Image2,
  Image3,
  Item,
  Product,
  TextContainer,
  TextTittel,
  TextWrapper,
} from "./slidersElements";

const sliders = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // eslint-disable-next-line no-dupe-keys
    speed: 500,
    pauseOnHover: false,
  };
  return (
    <>
      <Div id="hero">
        <Slider {...settings}>
          <Item>
            <ImagContainer>
              <Image src={img2} alt="" />
            </ImagContainer>
            <TextContainer>
              <TextWrapper>
                <TextTittel>Men New-Season</TextTittel>
                <Product>JACKETS & COATS</Product>
                <ButtonLink to={"/shop"}>SHOP NOW</ButtonLink>
              </TextWrapper>
            </TextContainer>
          </Item>
          <Item>
            <ImagContainer>
              <Image2 src={img3} alt="" />
            </ImagContainer>
            <TextContainer>
              <TextWrapper>
                <TextTittel>Woman Collection 2023</TextTittel>
                <Product>NEW SEASON</Product>
                <ButtonLink to={"/shop"}>SHOP NOW</ButtonLink>
              </TextWrapper>
            </TextContainer>
          </Item>
          <Item>
            <ImagContainer>
              <Image3 src={img4} alt="" />
            </ImagContainer>
            <TextContainer>
              <TextWrapper>
                <TextTittel>Men Collection 2023</TextTittel>
                <Product>NEW ARRIVALS</Product>
                <ButtonLink to={"/shop"}>SHOP NOW</ButtonLink>
              </TextWrapper>
            </TextContainer>
          </Item>
        </Slider>
      </Div>
    </>
  );
};

export default sliders;
