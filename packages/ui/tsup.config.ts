import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./**/*.tsx", "src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "./tsconfig.json",
  clean: true,
  // treeshake: true,
  splitting: true,
  minify: true,
  platform: "browser",
  skipNodeModulesBundle: true,
  banner: {
    js: "'use client';",
  },
  // loader: {
  //   ".css": "local-css",
  // },
  esbuildOptions(options) {
    if (options.platform === "browser") {
      options.banner = {
        js: '"use client"',
      };
    }
  },
  external: ["react"],
  ...options,
}));

