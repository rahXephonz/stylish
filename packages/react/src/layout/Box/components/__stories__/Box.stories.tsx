import React from "react";
import Box from "../Box";

export default {
  title: "Core/Layout/Box",
  component: Box,
};

export const BasicExample = () => <Box>I&apos;m inside a box!</Box>;

export const StyleProps = () => (
  <Box
    sx={{
      backgroundColor: "blue",
      color: "white",
    }}
  >
    This box is styled using CSS variables!
  </Box>
);
