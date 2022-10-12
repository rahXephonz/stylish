import React from "react";
import { Story } from "@storybook/react";

import { theme } from "theme";
import Heading, { HeadingProps } from "./Heading";

export default {
  title: "Core/Typography/Heading",
  component: Heading,
  argTypes: {
    scale: {
      options: ["2xl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<HeadingProps> = ({ scale, fontFamily, fontWeight }) => (
  <Heading {...{ scale, fontFamily, fontWeight }}>We are making components for everyone</Heading>
);

export const Example = Template.bind({});
Example.args = {
  scale: "2xl",
  fontWeight: 300,
  fontFamily: "system",
};
