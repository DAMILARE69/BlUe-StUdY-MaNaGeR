//@ts-check
import { MoonStars, Sun } from "phosphor-react";
import { motion } from "framer-motion/dist/framer-motion";
import { useTheme } from "../../Hooks/useTheme/useTheme";
export function BMoonAndSunToggle({ type, size, color }) {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <>
      {isDarkMode && (
        <motion.span
          exit={{ y: -100, opacity: 0, transition: { ease: "easeInOut" } }}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MoonStars
            onClick={() => toggleTheme()}
            color={color}
            size={size}
            weight={type}
          />
        </motion.span>
      )}
      {!isDarkMode && (
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ y: -100, opacity: 0, transition: { ease: "easeInOut" } }}
        >
          <Sun
            onClick={() => toggleTheme()}
            color={color}
            size={size}
            weight={type}
          />
        </motion.span>
      )}
    </>
  );
}
