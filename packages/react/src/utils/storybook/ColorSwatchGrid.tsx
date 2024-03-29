import React from "react";
import { Box } from "layout";

const ColorSwatchGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 4 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export default ColorSwatchGrid;
