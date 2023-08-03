import { styled } from "styled-components";
export const ProductSection = styled.section`
  width: 100%;
  height: auto;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6);" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 235px;
`;
export const ProductContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const ProductText = styled.h1`
  font-size: 42px;
  padding-bottom: 40px;
`;
