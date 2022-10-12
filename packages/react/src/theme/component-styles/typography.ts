import type { ComponentThemeConfig } from "interface/Components";

export const heading: ComponentThemeConfig = {
  propToScaleMap: [["scale", "scales"]],
  scales: {
    scales: {
      "2xl": {
        fontSize: 900,
        lineHeight: 900,
        fontWeight: 700,
        letterSpacing: "-0.2px",
      },
      xxl: {
        fontSize: 800,
        lineHeight: 800,
        fontWeight: 700,
        letterSpacing: "-0.2px",
      },
      xl: {
        fontSize: 700,
        lineHeight: 700,
        fontWeight: 700,
        letterSpacing: "-0.2px",
      },
      lg: {
        fontSize: 600,
        lineHeight: 600,
        fontWeight: 700,
        letterSpacing: "-0.2px",
      },
      md: {
        fontSize: 500,
        lineHeight: 500,
        fontWeight: 700,
        letterSpacing: "-0.05px",
      },
      sm: {
        fontSize: 400,
        lineHeight: 400,
        fontWeight: 700,
        letterSpacing: "-0.05px",
      },
      xs: {
        fontSize: 300,
        lineHeight: 300,
        fontWeight: 700,
        letterSpacing: "-0.05px",
      },
      xxs: {
        fontSize: 200,
        lineHeight: 200,
        fontWeight: 600,
      },
    },
  },
};

export const text: ComponentThemeConfig = {
  propToScaleMap: [["scale", "scales"]],
  scales: {
    scales: {
      lg: {
        fontSize: "20px",
        lineHeight: "28px",
      },
      md: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "-0.05px",
      },
      sm: {
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.05px",
      },
      xs: {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
  },
};

/** Anchor size values mapped by scale token. */
export const anchor: ComponentThemeConfig = {
  baseStyle: {
    color: "blue07",
    "&:hover": {
      color: "blue08",
      textDecoration: "underline",
    },
    "&:focus, &:active": {
      color: "blue09",
      textDecoration: "underline",
    },
  },
};

export const unstyledAnchor: ComponentThemeConfig = {
  baseStyle: {
    color: "inherit",
    textDecoration: "none",
    fontWeight: "inherit",
    "&:hover, &:focus, &:active": {
      color: "inherit",
      textDecoration: "none",
      fontWeight: "inherit",
    },
  },
};

const typography = {
  heading,
  text,
  anchor,
  unstyledAnchor,
};

export default typography;
