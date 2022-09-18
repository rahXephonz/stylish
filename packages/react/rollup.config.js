import Typescript from "rollup-plugin-typescript2";
import { getFiles } from "./scripts/getFiles";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default {
  input: ["src/index.ts", ...getFiles("./src/components", extensions), ...getFiles("./src/layout", extensions)],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  plugins: [Typescript()],
  preserveModules: true,
  external: [
    "react",
    "@stylish-ui/core",
    "styled-system",
    "styled-components",
    "@styled-system/css",
    "@styled-system/should-forward-prop",
  ],
};
