import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";
import dts from "rollup-plugin-dts";
import visualizer from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";

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
    external: ["react", "@stylish-ui/core", "styled-system", "styled-components", "@stylish-ui/hooks"],
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
