import { IconButton, Box, Stack, Wrap, WrapItem, Text } from "@stylish-ui/react";
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
          <Text scale="lg">Hello Worldsssssss</Text>
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
