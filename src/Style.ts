// deno-lint-ignore-file no-empty-interface
import * as wasm from "./wasm.js";
import { notLoadedError } from "./utils.ts";
import { loaded } from "./Taffy.ts";

export interface StyleOptions {
}

export class Style {
  #ptr: number;
  constructor(ptrOrStyle?: StyleOptions | number) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.#ptr = ptrOrStyle === undefined
      ? wasm.style_default()
      : typeof ptrOrStyle === "number"
      ? ptrOrStyle
      : 0;
  }

  static default() {
    return new Style();
  }
  get ptr() {
    return this.#ptr;
  }
}
