import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext";

export const useTheme = () => {
  return useContext(ThemeContext);
};
