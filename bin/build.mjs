/* eslint-disable import/no-extraneous-dependencies */
import { build } from "esbuild"

const run = async () => {
  await build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/index.js",

    bundle: true,
    allowOverwrite: true,
    minify: false,

    target: "node14",
    platform: "node",
    format: "cjs",
    mainFields: ["module", "main"],

    logLevel: "info",
  })
}

void run().catch(() => {
  process.exit(1)
})
