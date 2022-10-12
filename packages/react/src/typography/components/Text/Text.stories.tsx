import React from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";

import { theme } from "theme";
import Text, { TextProps } from "./Text";

export default {
  title: "Core/Typography/Text",
  component: Text,
  argTypes: {
    scale: {
      options: ["lg", "md", "sm", "xs"],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<TextProps> = ({ scale, fontFamily, fontWeight }) => (
  <Text onClick={action("button-click")} {...{ scale, fontFamily, fontWeight }}>
    We are making components for everyone
  </Text>
);

export const Example = Template.bind({});

Example.args = {
  scale: "md",
  fontFamily: "system",
  fontWeight: 400,
};
