import { Link } from "react-router-dom";
import styled from "styled-components";
export const PageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PageContainer = styled.div`
  width: 640px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Text404 = styled.h1`
  font-size: 168px;
  color: #717fe0;
  margin-top: -50px;
`;
export const TextH2 = styled.h2`
  font-size: 22px;
  color: #222;
`;
export const TextLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #39b1cb;
`;
export const Icone = styled.span`
  font-size: 18px;
  color: #39b1cb;
`;
