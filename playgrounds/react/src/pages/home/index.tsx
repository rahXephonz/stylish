import { tw } from "twind";
import Link from "next/link";
import loadable from "@loadable/component";
import { IconButton, Box, Stack, Wrap, WrapItem, Text, Badge } from "@stylish-ui/react";
import { Belt, Cart } from "@stylish-ui/icons";

const LayoutLoadable = loadable(() => import("../../components/Layout"));

const HomePage = () => {
  return (
    <LayoutLoadable title="Home | Next.js Perfomance">
      <h1 className={tw("text-2xl text-green-500")}>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Box
        sx={{
          backgroundColor: "pink",
        }}
      >
        <Stack direction="vertical">
          <Box>
            <Text scale="lg" sx={{ border: "1px solid green" }}>
              Hello Worldsssssss
            </Text>
          </Box>
          <Box>
            <Cart size={20} />
            <IconButton />
          </Box>
          <Box>
            <Belt size={20} />
            <IconButton />
          </Box>
        </Stack>

        <Wrap justifyContent="flex-start" sx={{ border: "1px solid red" }}>
          <WrapItem>
            <p>Hello</p>
          </WrapItem>
          <WrapItem>
            <p>Hellos</p>
          </WrapItem>
          <WrapItem>
            <p>Hallo</p>
          </WrapItem>
        </Wrap>

        <Wrap justifyContent="flex-end">
          {[1, 2, 3].map(item => (
            <Badge variant="success" key={item}>
              <p>Hello</p>
            </Badge>
          ))}
        </Wrap>
      </Box>
    </LayoutLoadable>
  );
};

export default HomePage;
