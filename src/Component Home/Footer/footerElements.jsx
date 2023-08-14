import { styled } from "styled-components";
export const FooterSection = styled.section`
  width: 100%;
  height: 470px;
  transition: all 0.3s ease-in-out;
  background-color: #222222;
  display: flex;
  justify-content: center;
`;
export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;

  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
export const FooterTextContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: space-between;
`;
export const FooterColContainer = styled.div`
  width: 25%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterTextTittel = styled.h4`
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  color: #fff;
  margin-bottom: 32px;
`;
export const FooterTextItem = styled.p`
  font-size: 16px;
  line-height: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #b2b2b2;
  &:hover {
    color: #717fe0;
  }
`;
export const FooterAddres = styled.p`
  font-size: 16px;
  color: #b2b2b2;
`;
export const IconsContainer = styled.div`
  width: 85px;
  height: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Iconse = styled.div`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #b2b2b2;

  &:hover {
    color: #717fe0;
  }
`;
export const FooterInput = styled.input`
  width: 90%;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #b2b2b2;
  padding-bottom: 10px;
  color: #b2b2b2;
`;
export const FooterInputColContainer = styled.div`
  width: 22%;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterInputButton = styled.div`
  border-radius: 32px;
  width: 185px;
  height: 45px;
  background-color: #717fe0;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 32px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #717fe0;
  }
`;
export const FooterCol2Container = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
`;
export const FooterCol2Content = styled.div`
  width: 530px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
export const FooterContentIcons = styled.div`
  width: 190px;

  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContentIconse = styled.div`
  font-size: 32px;
  cursor: pointer;
  color: #dfdcd9;
`;
export const ContentText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: #b2b2b2;
`;
