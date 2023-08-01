import React from "react";
import { HeroContainer, HeroSection } from "./heroElements";
import Sliders from "./sliders";

const Hero = ({ isopen }) => {
  return (
    <>
      <HeroSection isopen={isopen}>
        <HeroContainer>
          <Sliders isopen={isopen} />
        </HeroContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
