import React from "react";
import { ThemeProvider } from "styled-components";
import { theme as DefaultTheme, Theme } from "theme";
import { injectGlobalStyles } from "utils";

interface StylishProviderProps {
  disableInject?: boolean;
  theme?: Theme;
}

const GlobalStyles = injectGlobalStyles;

const StylishProvider: React.FC<StylishProviderProps> = ({ children, theme = DefaultTheme, disableInject }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {!disableInject && <GlobalStyles />}
        {children}
      </>
    </ThemeProvider>
  );
};

StylishProvider.displayName = "StylishProvider";

export default StylishProvider;
