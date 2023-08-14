import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const CartContainer = styled(Link)`
  width: 370px;
  text-decoration: none;
  height: 250px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(103, 117, 214, 0.8);
  }
`;
export const CartTextContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
export const CartTextWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CartNameText = styled.h4`
  font-size: 32px;
  color: #333333;
  margin-bottom: 8px;
  transition: all 0.3s ease-in-out;
  ${CartContainer}:hover & {
    color: #fff;
  }
`;
export const CartCollactionText = styled.div`
  font-size: 16px;
  color: #555555;
  transition: all 0.3s ease-in-out;
  ${CartContainer}:hover & {
    color: #fff;
  }
`;
export const CartButton = styled(Link)`
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 32px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  color: #fff;
  visibility: hidden;
  margin-bottom: -100px;
  border-bottom: 2px solid #fff;
  padding-bottom: 6px;
  text-decoration: none;
  ${CartContainer}:hover & {
    color: #fff;
    visibility: visible;
    opacity: 1;
    margin-bottom: 32px;
  }
`;
export const CartImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const CartImage = styled.img`
  width: 250px;
  height: 250px;
  transition: all 0.3s ease-in-out;
  ${CartContainer}:hover & {
    filter: brightness(30%);
  }
`;
