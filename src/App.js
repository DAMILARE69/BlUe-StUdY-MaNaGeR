//@ts-check
import { User } from "phosphor-react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { useTheme } from "./Hooks/useTheme/useTheme";
import { AppComponent } from "./AppStyles";
import { BButton } from "./Components/BButton/BButton";

export default function App() {
  const { theme, toggleTheme } = useTheme();
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppComponent onContextMenu={disableContext}>
        {true ? (
          <>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            {/* <BButton
              edge="50%"
              height="40px"
              width="40px"
              curved={false}
              content={null}
              isDisabled={undefined}
              background={theme.brandColor}
              color={theme.light}
              event={() => toggleTheme()}
              outlined={false}
              Icon={{ name: User, color: theme.color, size: 20 }}
            /> */}
          </>
        ) : (
          <p>Loading....</p>
        )}
      </AppComponent>
    </ThemeProvider>
  );
}
