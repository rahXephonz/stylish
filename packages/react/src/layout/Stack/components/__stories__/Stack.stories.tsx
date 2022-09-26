import React from "react";
import { Story } from "@storybook/react";

import { Box } from "layout/Box";
import Stack, { StackProps } from "../Stack";

export default {
  title: "Core/Layout/Stack",
  component: Stack,
  argTypes: {
    spacing: {
      options: ["xxxs", "xxs", "xs", "sm", "md", "lg", "xl", "xxl"],
    },
  },
};

export const Example: Story<StackProps> = ({ spacing }) => {
  return (
    <Box backgroundColor="skyblue">
      <Stack spacing={spacing}>
        <Box backgroundColor="white">
          <p>Box (backgroundColor=white)</p>
        </Box>
        <Box backgroundColor="white">
          <p>Box (backgroundColor=white)</p>
        </Box>
        <Box backgroundColor="white">
          <p>Box (backgroundColor=white)</p>
        </Box>
      </Stack>
    </Box>
  );
};

Example.args = {
  spacing: "md",
};
