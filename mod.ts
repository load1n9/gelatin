// @deno-types="./gelatin.d.ts"

import * as wasm from "./src/wasm.js";

export let loaded = false;

export async function load(): Promise<void> {
  if (!loaded) {
    await wasm.default(wasm.source);
    loaded = true;
  }
}

export function loadSync() {
  if (!loaded) {
    wasm.initSync(wasm.source);
    loaded = true;
  }
}

export * from "./src/wasm.js";
