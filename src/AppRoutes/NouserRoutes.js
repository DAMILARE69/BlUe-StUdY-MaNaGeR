//@ts-check
//NouserRoutes

import { Outlet } from "react-router-dom";
import { PageWarpper } from "../Components/PageWarpper/PageWarpper";
import { useAuth } from "../Hooks/useAuth/useAuth";
export function NouserRoutes() {
  const { user, signout } = useAuth();
  return user ? (
    <PageWarpper>
      <h1>
        Go to Dashboard <button onClick={() => signout()}>log out</button>
      </h1>
    </PageWarpper>
  ) : (
    <Outlet />
  );
}
