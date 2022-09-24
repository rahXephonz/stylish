import { IconButton, Box, Stack, Wrap, WrapItem } from "@stylish-ui/react";
import "./index.css";

export default function App() {
  return (
    <Box
      sx={{
        p: "5px",
        backgroundColor: "pink",
      }}
    >
      <Stack spacing="lg" direction="vertical">
        <Box>
          <p>Hello Worldsssssss</p>
        </Box>
        <Box>
          <IconButton />
        </Box>
        <Box>
          <IconButton />
        </Box>
      </Stack>

      <Wrap spacing="lg" justifyContent="flex-end">
        <WrapItem>
          <p>Hello</p>
        </WrapItem>
        <WrapItem>
          <p>Hello</p>
        </WrapItem>
        <WrapItem>
          <p>Hello</p>
        </WrapItem>
      </Wrap>
    </Box>
  );
}
