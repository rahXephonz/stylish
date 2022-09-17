import Ts from "rollup-plugin-typescript2";
import { getFiles } from "./scripts/buildUtils";

const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default {
  input: ["src/index.ts", ...getFiles("./src/components", extensions)],
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: true,
  },
  plugins: [Ts()],
  preserveModules: true,
  external: ["react"],
};
