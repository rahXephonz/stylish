/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from "theme";
import "styled-components";

// declare our custom theme
type ThemeInterface = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
