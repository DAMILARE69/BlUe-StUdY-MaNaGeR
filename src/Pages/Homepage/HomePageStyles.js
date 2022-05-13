import styled from "styled-components";

export const Homepage = styled.section`
  height: 100%;
  width: 100%;
  gap: 10px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    color: ${(props) => props.theme.colorTwo};
  }
`;
