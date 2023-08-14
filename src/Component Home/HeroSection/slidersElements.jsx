import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const Div = styled.div`
  width: 100%;
  height: 100%;
`;
export const Item = styled.div`
  width: 100%;
  height: 710px;
  display: flex !important;
  flex-direction: row-reverse !important;
`;
export const ImagContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex !important;
`;
export const Image = styled.img`
  height: 790px;
  margin-top: -70px !important;
  margin-left: -80px;
  transition: all 0.3s ease-in-out;
`;
export const Image2 = styled.img`
  height: 800px;
  margin-top: -30px !important;
  margin-left: -100px !important;
  transition: all 0.3s ease-in-out;
`;
export const Image3 = styled.img`
  height: 710px;
  margin-top: -10px !important;
  margin-left: -15px;
  transition: all 0.3s ease-in-out;
`;
export const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TextWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
`;
export const TextTittel = styled.p`
  font-size: 32px;
  color: #474848;
`;
export const Product = styled.p`
  font-size: 54px;
  color: #333333;
`;
export const ButtonLink = styled(Link)`
  width: 170px;
  height: 50px;
  border-radius: 32px;
  -webkit-border-radius: 32px;
  -moz-border-radius: 32px;
  -ms-border-radius: 32px;
  -o-border-radius: 32px;
  border: none;
  color: #fff;
  background-color: #717fe0;
  text-align: center;
  text-decoration: none;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  transition: all 0.3s ease-in-out;
`;
