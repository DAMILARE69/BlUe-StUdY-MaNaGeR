//@ts-check
//NouserRoutes

import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth/useAuth";
export function NouserRoutes() {
  const { user } = useAuth();
  return user ? <h1>Go to Dashboard</h1> : <Outlet />;
}
