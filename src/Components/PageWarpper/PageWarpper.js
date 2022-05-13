//@ts-check
import { motion } from "framer-motion/dist/framer-motion";
import { PageWarpperComponent } from "./PageWarpperStyles";
export function PageWarpper({ children }) {
  return (
    <PageWarpperComponent
      as={motion.section}
      exit={{ x: "-100vw", duration: 0.5, transition: { ease: "easeInOut" } }}
      transition={{ duration: 0.5 }}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {children}
    </PageWarpperComponent>
  );
}
