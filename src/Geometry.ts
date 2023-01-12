import * as wasm from "./wasm.js";
import { notLoadedError } from "./utils.ts";
import { loaded } from "./Taffy.ts";

export class Dimension {
  static get Auto(): [number, number] {
    return [2, 0];
  }

  static get Undefined(): [number, number] {
    return [3, 0];
  }

  static Points(value: number): [number, number] {
    return [0, value];
  }

  static Percent(value: number): [number, number] {
    return [1, value];
  }
}

export class Rect {
  #ptr: number;

  constructor(
    dimensionsOrPtr: {
      left: [number, number];
      right: [number, number];
      top: [number, number];
      bottom: [number, number];
    } | number,
  ) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.#ptr = typeof dimensionsOrPtr === "number"
      ? dimensionsOrPtr
      : wasm.encode_rect(
        ...dimensionsOrPtr.left,
        ...dimensionsOrPtr.right,
        ...dimensionsOrPtr.top,
        ...dimensionsOrPtr.bottom,
      );
  }

  get ptr(): number {
    return this.#ptr;
  }
}
