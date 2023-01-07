import React from "react";
import type { Story } from "@storybook/react";
import { StylishProvider } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "padded",
  backgrounds: {
    grid: {
      disable: false,
      enable: true,
      cellSize: 4,
      opacity: 0.5,
      cellAmount: 5,
    },
  },
};

export const decorators = [
  (Story: Story) => (
    <StylishProvider>
      <Story />
    </StylishProvider>
  ),
];
