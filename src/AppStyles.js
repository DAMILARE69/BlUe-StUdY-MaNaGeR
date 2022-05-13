import styled from "styled-components";

export const AppComponent = styled.main`
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;
