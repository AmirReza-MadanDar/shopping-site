import { styled } from "styled-components";
export const BannerSection = styled.section`
  width: 100%;
  height: 415px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ isopen }) => (isopen ? "rgba(0,0,0,0.6);" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BannerContainer = styled.div`
  width: 100%;
  height: 250px;
  max-width: 1170px;

  display: flex;
  justify-content: space-between;
`;
