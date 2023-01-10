import { useEffect, useState } from "react";
import { tw } from "twind";
import { map } from "lodash-es";
import Link from "next/link";
import loadable from "@loadable/component";
import { IconButton, Box, Stack, Wrap, WrapItem, Text, Badge } from "@stylish-ui/react";
import { Belt, Cart } from "@stylish-ui/icons";
import todosService from "../../services/todos";

const LayoutLoadable = loadable(() => import("../../components/Layout"));

const HomePage = () => {
  const [todosArr, setTodosArr] = useState<Array<DataTodos>>([]);

  useEffect(() => {
    // this useeffect will running as async wrapped with async
    (async function asyncFn() {
      const res = await todosService.getAllTodos();
      setTodosArr(res);
    })();
  }, []);

  const arr = ["b", 1, 2, 3, "x"];
  console.log(map("map Arr", arr));
  console.log("client side fetching", todosArr);

  return (
    <LayoutLoadable title="Home | Next.js + TypeScript Example">
      <h1 className={tw("text-2xl text-green-500")}>Hello Next.js 👋</h1>
      {todosArr
        ? todosArr.map(item => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))
        : null}
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
            <Cart size={18} />
            <IconButton />
          </Box>
          <Box>
            <Belt />
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
