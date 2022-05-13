//@ts-check
import { motion } from "framer-motion";
import { PageWarpperComponent } from "./PageWarpperStyles";
export function PageWarpper({ children }) {
  return (
    <PageWarpperComponent
      exit={{ y: "-100vh", duration: 0.5, transition: { ease: "easeInOut" } }}
      transition={{ duration: 0.5 }}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {children}
    </PageWarpperComponent>
  );
}
