//@ts-check
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { useTheme } from "./Hooks/useTheme/useTheme";
import { AppComponent } from "./AppStyles";
import { useAuth } from "./Hooks/useAuth/useAuth";
import { AppRoutes } from "./AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const { theme } = useTheme();
  const { authIsReady } = useAuth();
  const disableContext = (/** @type {{ preventDefault: () => void; }} */ e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const disableContext = document.addEventListener("keydown", (event) => {
      if (event.code === "KeyI" && event.ctrlKey && event.shiftKey) {
        event.preventDefault();
      }
      event.code === "F12" && event.preventDefault();
    });
    return disableContext;
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppComponent
          onContextMenu={disableContext}
          className={!authIsReady && "preloader"}
        >
          {authIsReady ? <AppRoutes /> : <p>Loading....</p>}
        </AppComponent>
      </ThemeProvider>
    </BrowserRouter>
  );
}
