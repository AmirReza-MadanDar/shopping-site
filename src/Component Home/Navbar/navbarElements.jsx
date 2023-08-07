import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const NavbarSection = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  /* opacity: ${({ isopen }) => (isopen ? "0.7" : "1")}; */
  transition: all 0.3s ease-in-out;
  /* background-color: ${({ isopen }) =>
    isopen ? "rgba(0,0,0,0.6);" : "transparent"}; */
  z-index: 200;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavCol1 = styled.div`
  width: 615px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarLogo = styled(Link)`
  font-size: 32px;
  color: #333333;
  text-decoration: none;
  font-weight: bold;
`;
export const NavMenu = styled.ul`
  width: 415px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;
export const NavIcones = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  font-weight: 800;
  color: #494949;
  transition: all 0.3s ease-in-out;

  &.active {
    color: #717fe0;
  }

  &:hover {
    color: #717fe0;
  }
`;
export const IconeSearch = styled.div`
  font-size: 32px;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #717fe0;
  }
`;
export const CartContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-bottom: 0px;
`;
export const IconeCart = styled.div`
  font-size: 32px;
  cursor: pointer;
  color: #333333;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #717fe0;
  }
`;

export const Span = styled.span`
  font-size: 18px;
  color: #f5f6fd;
  position: absolute;
  font-weight: bold;
  top: 3px;
  right: 219px;
  width: 18px;
  height: 27px;
  text-align: center;
  background-color: #717fe0;
`;
export const Span2 = styled.span`
  font-size: 18px;
  color: #f5f6fd;
  position: absolute;
  font-weight: bold;
  top: 3px;
  right: 162px;
  width: 18px;
  height: 27px;
  text-align: center;
  background-color: #717fe0;
`;
