import React from "react";
import Box from "../Box";

export default {
  title: "Core/Layout/Box",
  component: Box,
};

export const Example = () => <Box>I&apos;m inside a box!</Box>;

export const StyleProps = () => (
  <Box
    sx={{
      backgroundColor: "skyblue",
      color: "white",
      p: "5px",
    }}
  >
    This box is styled using CSS variables!
  </Box>
);
