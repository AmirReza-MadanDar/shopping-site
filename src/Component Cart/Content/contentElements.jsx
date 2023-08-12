import styled from "styled-components";
export const ContentSection = styled.section`
  width: 100%;
  height: autos;
  padding-top: 140px;
  padding-bottom: 140px;
  display: flex;
  justify-content: center;
  user-select: none;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6)" : "#fff")};
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
`;
export const TabaleContainer = styled.div`
  width: 680px;
  height: 526px;
  border: 1px solid #e6e6e6;
`;
export const TableTextWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
`;
export const TableTittel1 = styled.div`
  width: 222px;
  height: 55px;
  display: flex;
  align-items: flex-end;
  margin-left: 32px;
`;
export const TableTittel2 = styled.div`
  width: 70px;
  height: 55px;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`;
export const TableTittel3 = styled.div`
  width: 145px;
  height: 55px;
  justify-content: center;
  display: flex;
  align-items: flex-end;
`;
export const TextTittel = styled.p`
  color: #555555;
  font-weight: 500;
`;
export const TableContentcol1 = styled.div`
  width: 100%;
  height: 185px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
`;
export const ProductCol = styled.div`
  width: 222px;
  height: 100%;
  margin-left: 32px;
  display: flex;
  align-items: center;
`;
export const ProductImg = styled.img`
  width: 60px;
  height: 85px;
  transition: all 0.3s ease-in-out;
  filter: ${({ isopen }) => (isopen ? "brightness(30%)" : "none")};
`;
export const ProductText = styled.p`
  color: #555555;
  margin-left: 16px;
  margin-top: 8px;
`;
export const PriceCol = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PriceText = styled.p`
  color: #555555;
`;
export const QuantityCol = styled.div`
  width: 145px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QuantityContent = styled.div`
  width: 140px;
  height: 45px;
  display: flex;
  border-radius: 3px;
`;

export const Chose = styled.div`
  width: 47px;
  height: 45px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #717fe0;
    color: #ffff;
  }
`;
export const Chose3 = styled.div`
  width: 47px;
  height: 45px;
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
export const Chose2 = styled.div`
  width: 47px;
  height: 45px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6)" : "#f7f7f7")};
  opacity: ${({ isopen }) => (isopen ? "0.1" : "1")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  user-select: text;
`;
export const TabaleContentcol2 = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
export const ButtonCol1 = styled.div`
  width: 395px;
  height: 100%;
  margin-left: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonInput = styled.input`
  border: 1px solid #e6e6e6;
  border-radius: 22px;
  width: 220px;
  height: 45px;
  font-size: 14px;
  font-weight: 400;
  padding-left: 16px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6)" : "#fff")};
  opacity: ${({ isopen }) => (isopen ? "0.1" : "1")};
`;
export const ButtonTeble = styled.button`
  width: 163px;
  height: 45px;
  font-size: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 22px;
  color: #333;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6)" : "#fff")};
  opacity: ${({ isopen }) => (isopen ? "0.1" : "1")};
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #717fe0;
  }
`;
export const ButtonCol2 = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DetailesContainer = styled.div`
  width: 365px;
  height: 750px;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DetailesWrapper = styled.div`
  width: 290px;
  height: 650px;
`;
export const DetailesTittelCol1 = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px dashed #e6e6e6;
`;
export const Tittel1 = styled.h5`
  color: #333333;
  font-weight: 700;
`;
export const TextCotainer = styled.div`
  width: 155px;
  display: flex;
  justify-content: space-between;
`;
export const SubtotalText = styled.p`
  color: #333333;
`;
export const SubtotalPrice = styled.p`
  color: #333333;
  font-size: 18px;
`;
export const DetailesTextContainer = styled.div`
  width: 100%;
  height: 410px;
  margin-top: 20px;
  border-bottom: 1px dashed #e6e6e6;
`;
export const DetailesTextCol1 = styled.div`
  width: 265px;
  height: 110px;
  display: flex;
  justify-content: space-between;
`;
export const Col1Text = styled.p`
  color: #333333;
`;
export const Col1Detailes = styled.p`
  color: #8888a7;
  width: 170px;
  font-size: 16px;
  line-height: 20px;
`;
export const InputContainer = styled.div`
  width: 195px;
  height: 250px;
  margin-top: 28px;
  margin-left: 33%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`;
export const InputcolTittel = styled.p`
  color: #333333;
  font-size: 14px;
  margin-bottom: 0;
`;
export const SelectInput = styled.select`
  width: 150px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  border: none;
`;
export const DetaolsInput = styled.input`
  width: 195px;
  height: 40px;
  font-size: 14px;
`;
export const InputButton = styled.button`
  width: 195px;
  border-radius: 22px;
  height: 45px;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #717fe0;
  }
`;
export const DrtailseCol3 = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 10px;
`;
export const DetailesCol3Button = styled.button`
  width: 290px;
  height: 40px;
  border-radius: 22px;
  border: none;
  transition: all 0.3s ease-in-out;
  color: #fff;
  background-color: #222;
  &:hover {
    color: #fff;
    background-color: #717fe0;
  }
`;
