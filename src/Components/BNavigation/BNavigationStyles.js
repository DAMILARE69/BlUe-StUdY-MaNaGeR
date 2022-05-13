//@ts-check
import styled from "styled-components";

export const Header = styled.header`
  top: 0;
  position: ${({ mode }) => mode};
  padding: 10px 3rem;
  width: 100%;
  background-color: ${({ background }) => background};
`;
export const MinimalHeaderNav = styled.nav`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position};
  gap: ${(props) => props.gap};
`;
