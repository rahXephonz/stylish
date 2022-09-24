import { create } from "@storybook/theming/create";

const storybookTheme = create({
  base: "light",
  colorPrimary: "#00838f",
  colorSecondary: "#ffc107",

  // UI
  appBg: "#f5f5f5",
  appContentBg: "#f5f5f5",
  appBorderRadius: 4,

  // Typography
  fontBase: "Roboto, sans-serif",

  // Text colors
  textColor: "black",
  textInverseColor: "black",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "#fff350",
  barBg: "#00838f",

  brandTitle: "💅Stylish UI",
  brandUrl: "https://github.com/ioofy/stylish",
});

export default storybookTheme;
