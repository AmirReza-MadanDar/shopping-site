import styled from "styled-components";
export const ButtonTop = styled.div`
  width: 40px;
  height: 38px;
  background-color: #717fe0;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right: 40px;
  border: none;
  z-index: 10000;
  display: flex;
  justify-content: center;
  opacity: ${({ scrollTop }) => (scrollTop ? "0.9" : "0")};
  visibility: ${({ scrollTop }) => (scrollTop ? "visible" : "hidden")};

  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
    background-color: #4e62ea;
  }
`;
export const BIcone = styled.div`
  font-size: 18px;
  color: #fff;
`;
