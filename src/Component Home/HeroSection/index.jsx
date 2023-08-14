import React from "react";
import { HeroContainer, HeroSection } from "./heroElements";
import Sliders from "./sliders";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <Sliders />
        </HeroContainer>
      </HeroSection>
    </>
  );
};

export default Hero;
