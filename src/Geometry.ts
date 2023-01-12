import * as wasm from "./wasm.js";
import { notLoadedError } from "./utils.ts";
import { loaded } from "./Taffy.ts";

export class Dimension {
  /**
   * The dimension should be automatically computed.
   */
  static get Auto(): [number, number] {
    return [2, 0];
  }

  /**
   * The dimension is not given.
   */
  static get Undefined(): [number, number] {
    return [3, 0];
  }

  /**
   * The dimension is stored in [points](https://en.wikipedia.org/wiki/Point_(typography))
   * Each point is about 0.353 mm in size.
   */
  static Points(value: number): [number, number] {
    return [0, value];
  }

  /**
   * The dimension is stored in percentage relative to the parent item.
   */
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

export const AlignItems = {
  FlexStart: 0,
  FlexEnd: 1,
  Center: 2,
  Baseline: 3,
  Stretch: 4,
};
