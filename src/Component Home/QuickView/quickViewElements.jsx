import { styled } from "styled-components";
export const QuickViewSection = styled.section`
  width: 100%;
  height: 100%;
  user-select: none;
  position: fixed;
  overflow: auto;
  z-index: 1000000;
  bottom: 0;
  display: flex;
  transition: all 0.3s ease-in-out;
  visibility: visible;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const QuickViewContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: 650px;
  background-color: #fff;
  display: flex;
`;
export const QuickViewSliderContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
`;
export const QuickViewTextContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const QuickViewTextWrapper = styled.div`
  width: 450px;
  height: 500px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const QuickViewTextTittel = styled.h1`
  color: #333;
  font-size: 24px;
`;
export const QuickViewPrice = styled.h2`
  color: #333;
  font-size: 20px;
`;
export const QuickViewDescription = styled.p`
  color: #666;
`;
export const QuickViewInputContainer = styled.div`
  width: 310px;
  height: 200px;

  margin-left: 32px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const QuickViewSelectInput = styled.select`
  width: 145px;
  height: 30px;
  border-radius: 8px;
  margin-left: 32px;
  display: flex;
  border: none;
`;
export const QuickViewInputCol1 = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const QuickViewChose = styled.div`
  width: 140px;
  height: 45px;
  background-color: #ae0e89;
  margin-left: 25%;
  display: flex;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
`;
export const Chose = styled.div`
  width: 47px;
  height: 45px;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #717fe0;
    color: #ffff;
  }
`;
export const Chose2 = styled.div`
  width: 47px;
  height: 45px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  user-select: text;
`;
export const Chose3 = styled.div`
  width: 47px;
  height: 45px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #717fe0;
    color: #fff;
  }
`;
export const ChoseIcone = styled.div`
  color: #555555;
  font-size: 24px;
  transition: all 0.3s ease-in-out;
  ${Chose}:hover & {
    color: #fff;
  }
  ${Chose3}:hover & {
    color: #fff;
  }
`;
export const QuickViewButton = styled.button`
  border-radius: 23px;
  background-color: #717fe0;
  width: 161px;
  height: 46px;
  border: none;
  font-size: 15px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  margin-left: 22.5%;
  &:hover {
    background-color: #222;
  }
`;
export const CloseIcone = styled.div`
  font-size: 32px;
  z-index: 111111;
  color: #a7a7a7;
  position: absolute;
  top: 8px;
  right: 150px;
  cursor: pointer;
  opacity: 0.8;
`;
