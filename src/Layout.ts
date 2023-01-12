import * as _wasm from "./wasm.js";
import { notLoadedError } from "./utils.ts";
import { loaded } from "./Taffy.ts";

export class Layout {
  #ptr: number;
  constructor(ptr: number) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.#ptr = ptr;
  }
  get ptr() {
    return this.#ptr;
  }
}
