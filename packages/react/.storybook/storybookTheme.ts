import { create } from "@storybook/theming/create";

const storybookTheme = create({
  base: "light",
  // colorPrimary: "#f15878",
  colorSecondary: "#f15878",

  // UI
  appBg: "#f5f5f5",
  appContentBg: "#f5f5f5",
  appBorderRadius: 4,

  // Typography
  fontBase: "Inter, sans-serif",

  // Text colors
  textColor: "black",
  textInverseColor: "black",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "#000",
  barBg: "#f15878",

  brandTitle: "💅Stylish UI",
  brandUrl: "https://github.com/ioofy/stylish",
});

export default storybookTheme;
