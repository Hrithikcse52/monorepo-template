import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./**/*.tsx", "src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  treeshake: true,
  splitting: true,
  minify: true,
  platform: "browser",
  skipNodeModulesBundle: true,
  external: ["react"],
  ...options,
}));

