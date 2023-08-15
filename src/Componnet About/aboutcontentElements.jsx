import styled from "styled-components";
export const AboutSection = styled.section`
  width: 100%;
  height: auto;
  padding-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AboutBaner = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BanerText = styled.h3`
  color: #fff;
  font-size: 50px;
  position: absolute;
`;
export const BanerImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 90px;
  padding-bottom: 155px;
`;
export const AboutCol1 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 195px;
`;
export const AboutCol2 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
export const AboutTextCol = styled.div`
  width: 695px;
  height: 450px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const AboutTextCol2 = styled.div`
  width: 695px;
  height: 360px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
`;
export const AboutTextTittel = styled.h3`
  font-size: 25px;
  color: #333;
`;
export const AboutTextP = styled.p`
  font-size: 14px;
  color: #888;
`;
export const AboutImageCol = styled.div`
  width: 370px;
  height: 370px;
  border: 3px solid #ccc;
`;
export const AboutImage = styled.img`
  width: 370px;
  height: 370px;
  margin-top: -21px;
  margin-left: 21px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;
export const AboutTextContainer = styled.div`
  width: 100%;
  height: 115px;
  border-left: 3px solid #e6e6e6;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 30px;
`;
export const AboutTextP2 = styled.p`
  width: 90%;
  margin-left: 30px;
  font-size: 14px;
`;
export const AboutTextSpan = styled.span`
  font-size: 13px;
  color: #555;
  margin-left: 30px;
`;
