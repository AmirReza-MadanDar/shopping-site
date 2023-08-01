import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const CartViewSection = styled.aside`
  width: 405px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  right: ${({ isopen }) => (isopen ? "0" : "-100%")};
  transition: all 0.3s ease-in-out;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const CartViewContainer = styled.div`
  width: 255px;
  height: 340px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 40px;
`;
export const CartViewCol1 = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const CartViewText = styled.h3`
  color: #333333;
`;
export const CloseIcone = styled.div`
  font-size: 32px;
  cursor: pointer;
  margin-top: -5px;
  text-align: center;
  display: flex;
`;
export const CartViewCol2 = styled.div`
  width: 100%;
  max-height: 260px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: auto;
`;
export const CartDetailseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartShowing = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;
export const CartImage = styled.img`
  width: 60px;
  height: 80px;
`;
export const CartTextWrraper = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const ProductName = styled.p`
  color: #7c7c7c;
`;
export const ProductPrize = styled.p`
  color: #7c7c7c;
`;
export const CartViewCol3 = styled.div`
  width: 255px;
  height: 150px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CartTotal = styled.p`
  color: #7c7c7c;
  font-size: 24px;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CartButton = styled(Link)`
  width: 120px;
  height: 40px;
  text-align: center;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  background-color: #222222;
  color: #fff;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #717fe0;
  }
`;
