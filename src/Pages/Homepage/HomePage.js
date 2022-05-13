//@ts-check
import { Sun, MoonStars, User } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme/useTheme";
import { Homepage } from "./HomePageStyles";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import { BButton } from "../../Components/BButton/BButton";
export function HomePage() {
  const { toggleTheme, theme, isDarkMode } = useTheme();
  const goTo = useNavigate();
  return (
    <PageWarpper>
      <Homepage>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <BButton
          edge={undefined}
          height="40px"
          width="50%"
          curved
          content="Toggle Theme"
          isDisabled={undefined}
          background={theme.brandColor}
          color={theme.light}
          event={() => toggleTheme()}
          outlined={false}
          Icon={{
            name: isDarkMode ? MoonStars : Sun,
            color: theme.light,
            size: 30
          }}
        />
        <BButton
          edge="50%"
          height="40px"
          width="40px"
          curved={false}
          content={null}
          isDisabled={undefined}
          background={theme.brandColor}
          color={theme.light}
          event={() => goTo("/sign-up")}
          outlined={false}
          Icon={{ name: User, color: theme.color, size: 20 }}
        />
      </Homepage>
    </PageWarpper>
  );
}
