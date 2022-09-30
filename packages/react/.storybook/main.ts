const path = require("path");

module.exports = {
  stories: ["../src/**/*.{story,stories}.mdx", "../src/**/*.{story,stories}.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-knobs", "@storybook/addon-links"],

  webpackFinal: async (config, { configType }) => {
    config.resolve.mainFields = ["stylish:src", "main"];
    config.resolve = {
      ...(config.resolve || {}),
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        theme: path.resolve(__dirname, "../src", "theme"),
        components: path.resolve(__dirname, "../src", "components"),
        layout: path.resolve(__dirname, "../src", "layout"),
        utils: path.resolve(__dirname, "../src", "utils"),
        system: path.resolve(__dirname, "../src", "system"),
        interface: path.resolve(__dirname, "../src", "interface"),
      },
    };

    return config;
  },
};
