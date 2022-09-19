import { Tooltip, IconButton, Box, Button } from "@stylish-ui/react";
import "./index.css";

export default function App() {
  return (
    <Box
      sx={{
        p: "5px",
        backgroundColor: "pink",
      }}
    >
      Hello World This is
      <Tooltip />
      <Button />
      <IconButton />
    </Box>
  );
}
