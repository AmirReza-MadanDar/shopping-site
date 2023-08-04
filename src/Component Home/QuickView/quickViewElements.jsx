import { styled } from "styled-components";
export const QuickViewSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: red;

  position: fixed;
  overflow: auto;
  z-index: 1000000;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QuickViewContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 700px;
  background-color: blue;
  display: flex;
`;
export const QuickViewSliderContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: aqua;

  display: flex;
`;
