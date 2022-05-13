//@ts-check
import styled from "styled-components";

export const BInputLabel = styled.label`
  background-color: ${({ theme }) => theme.depthColor};
  padding: 5px;
  display: flex;
  gap: 5px;
  border-radius: 5px;
  justify-content: ${(props) => (props.Icon ? "space-between" : "unset")};
  align-items: center;
  transition: border 1s ease;
  &.hasActiveState:focus,
  &.hasActiveState:hover {
    outline: dashed 2px ${({ focusColor }) => focusColor};
  }
  & .AuthenticationFormIconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .AuthenticationFormInputContainer {
    flex: 2;
  }
  & .AuthenticationFormInputContainer input {
    width: 100%;
    background-color: transparent;
    height: 40px;
    border: none;
    outline: none;
    font-size: 1rem;
    padding-left: 5px;
  }
`;
