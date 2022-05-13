//@ts-check
import { Header, MinimalHeaderNav } from "./BNavigationStyles";
import { BMoonAndSunToggle } from "../BToggleButton/BMoonAndSunToggle";
import { useTheme } from "../../Hooks/useTheme/useTheme";
export function BMinimalHeader({ mode, position, gap }) {
  const { theme } = useTheme();
  return (
    <Header mode={mode} background={theme.background}>
      <MinimalHeaderNav position={position} gap={`${gap}px`}>
        <h1>Blue SM</h1>
        <BMoonAndSunToggle type="fill" size={32} color={theme.brandColor} />
      </MinimalHeaderNav>
    </Header>
  );
}
