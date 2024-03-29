const system =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

const fonts = {
  system,
  brand: `'Inter', ${system}`,
  monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;",
};

const fontSizes = {
  900: "42px",
  800: "35px",
  700: "29px",
  600: "24px",
  500: "20px",
  400: "16px",
  300: "14px",
  200: "12px",
  100: "12px",
};

const lineHeights = {
  900: "48px",
  800: "40px",
  700: "32px",
  600: "28px",
  500: "24px",
  400: "20px",
  300: "16px",
  200: "16px",
  100: "16px",
};

const typography = {
  fonts,
  fontSizes,
  lineHeights,
};

export type Fonts = typeof fonts;
export type FontSizes = typeof fontSizes;
export type LineHeights = typeof lineHeights;

export default typography;
