//@ts-check
//NouserRoutes

import { Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth/useAuth";
export function NouserRoutes() {
  const { user, signout } = useAuth();
  return user ? (
    <h1>
      Go to Dashboard <button onClick={() => signout()}>log out</button>
    </h1>
  ) : (
    <Outlet />
  );
}
