import styled from "styled-components";
export const BlogCartContainer = styled.div`
  width: 825px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 70px;
`;
export const BlogCartImage = styled.div`
  width: 100%;
  height: 415px;
  display: flex;
`;
export const BlogTextDate = styled.div`
  width: 70px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin-top: 15px;
  margin-left: 10px;
`;
export const BlogNumText = styled.h4`
  color: #333;
  font-size: 30px;
  margin-top: 6px;
`;
export const BlogMoneText = styled.p`
  color: #666;
  font-size: 12px;
  margin-top: -7px;
`;
export const BlogImg = styled.img`
  width: 825px;
  height: 415px;
`;
export const BlogNameText = styled.a`
  font-size: 26px;
  color: #333;
  text-decoration: none;
  font-weight: 650;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #717fe0;
  }
`;
export const BlogDescription = styled.p`
  font-size: 15px;
  color: #888;
`;
export const BlogDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const BlogDetailsCol1 = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`;
export const BlogDetailsText = styled.p`
  font-size: 13px;
  color: #333;
`;
export const BlogSpan = styled.span`
  color: #888;
  font-size: 13px;
`;
export const BLogSlash = styled.span`
  color: #888;
  font-size: 12px;
`;
export const BlogDetailsText2 = styled.a`
  font-size: 15px;
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  display: flex;
  font-weight: 550;
  &:hover {
    color: #717fe0;
  }
`;
export const IconeSpan = styled.span`
  margin-left: 9px;
  font-size: 15px;
  margin-top: -2px;
`;
