//@ts-check
// @ts-ignore
import styled from "styled-components";
// import { motion } from "framer-motion";

export const BButtonComponent = styled.button`
  color: ${({ color }) => color};
  width: ${(/** @type {{ width: String; }} */ props) => props.width};
  display: flex;
  font-size: ${(props) => props.Icon.size - 3 + "px"};
  height: ${(/** @type {{ height: String; }} */ props) => props.height};
  gap: ${({ Icon }) => (Icon ? "5px" : "0px")};
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: ${(/** @type {{ curved: Boolean; edge: String; }} */ props) =>
    props.curved ? "9999px" : props.edge};
  background-color: ${(
    /** @type {{ outlined: Boolean; background: String; }} */ props
  ) => (props.outlined ? "transparent" : props.background)};
  outline: ${(
    /** @type {{ outlined: Boolean; background: String; }} */ props
  ) => (props.outlined ? `solid 1px ${props.background}` : "unset")};
  &:hover {
    background-color: ${(
      /** @type {{ outlined: Boolean; background: String; }} */ props
    ) => props.outlined && props.background};
  }
  &:disabled {
    background-color: ${(
      /** @type {{ theme: { brandColorDisabled: string; }; }} */ props
    ) => props.theme.brandColorDisabled};
    cursor: progress;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
