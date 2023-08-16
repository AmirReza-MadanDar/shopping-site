import React, { useEffect, useState } from "react";
import { BIcone, ButtonTop } from "./buttonElements";
import { IoIosArrowUp } from "react-icons/io";

const BouttonIndex = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const changeTop = () => {
    if (window.scrollY >= 500) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeTop);
  }, []);

  const toggelTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <ButtonTop onClick={toggelTop} scrollTop={scrollTop}>
        <BIcone>
          <IoIosArrowUp />
        </BIcone>
      </ButtonTop>
    </>
  );
};

export default BouttonIndex;
