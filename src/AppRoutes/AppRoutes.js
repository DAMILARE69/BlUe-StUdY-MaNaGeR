//@ts-check
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "../Pages/Authentication/Signup";
import { HomePage } from "../Pages/Homepage/HomePage";
import { NouserRoutes } from "./NouserRoutes";

export function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route element={<NouserRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </AnimatePresence>
  );
}
