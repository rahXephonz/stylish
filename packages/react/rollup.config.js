import typescript from "rollup-plugin-typescript2";
import externals from "rollup-plugin-node-externals";
import dts from "rollup-plugin-dts";
import visualizer from "rollup-plugin-visualizer";

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

      visualizer({
        filename: "bundle-analysis.html",
        open: process.env.ANALYZE,
      }),

      externals({
        devDeps: false,
      }),
    ],
    preserveModules: true,
    external: ["react", "@stylish-ui/core", "styled-system", "styled-components"],
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
