import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";
import dts from "rollup-plugin-dts";
import visualizer from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";

const excludeLibs = [
  "react",
  "@stylish-ui/core",
  "@stylish-ui/hooks",
  "styled-system",
  "styled-components",
  "csstype",
  "react-fast-compare",
];

export default [
  {
    input: ["src/index.ts"],
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      typescript(),

      terser({
        ecma: 2020,
        compress: true,
        module: true,
        toplevel: false,
      }),

      visualizer({
        filename: "bundle-analysis.html",
        open: process.env.ANALYZE && process.env.NODE_ENV === "development",
      }),

      externals({
        devDeps: false,
      }),
    ],
    preserveModules: true,
    external: [...excludeLibs],
  },
  {
    input: ["src/index.ts"],
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: "./src",
        },
      }),
    ],
  },
];
