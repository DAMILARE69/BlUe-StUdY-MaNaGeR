import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { ThemeContextProvider } from "./Context/ThemeContext/ThemeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
