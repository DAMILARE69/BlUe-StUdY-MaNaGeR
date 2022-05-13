import styled from "styled-components";

export const AppComponent = styled.main`
  background-color: ${(props) => props.theme.background};
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
