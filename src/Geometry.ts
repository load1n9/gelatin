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

export class Size {
  #ptr: number;

  constructor(
    dimensionsOrPtr: {
      width: [number, number];
      height: [number, number];
    } | number,
  ) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.#ptr = typeof dimensionsOrPtr === "number"
      ? dimensionsOrPtr
      : wasm.encode_size(
        ...dimensionsOrPtr.width,
        ...dimensionsOrPtr.height,
      );
  }

  static get Zero() {
    if (!loaded) {
      throw notLoadedError;
    }
    return new Size(wasm.encode_size_zero());
  }
  get ptr(): number {
    return this.#ptr;
  }
}

export enum AlignItems {
  FlexStart,
  FlexEnd,
  Center,
  Baseline,
  Stretch,
}

export enum AlignSelf {
  Auto,
  FlexStart,
  FlexEnd,
  Center,
  Baseline,
  Stretch,
}

export enum AlignContent {
  /**
   * Items are packed toward the start of the axis
   */
  FlexStart,
  /**
   * Items are packed toward the end of the axis
   */
  FlexEnd,
  /**
   * Items are centered around the middle of the axis
   */
  Center,
  /**
   * Items are stretched to fill the container
   */
  Stretch,
  /**
   * The first and last items are aligned flush with the edges of the container (no gap)
   * The gap between items is distributed evenly.
   */
  SpaceBetween,
  /**
   * The gap between the first and last items is exactly THE SAME as the gap between items.
   * The gaps are distributed evenly
   */
  SpaceEvenly,
  /**
   * The gap between the first and last items is exactly HALF the gap between items.
   * The gaps are distributed evenly in proportion to these ratios.
   */
  SpaceAround,
}

export enum Display {
  /**
   * The children will follow the flexbox layout algorithm
   */
  Flex,

  /**
   * The children will not be laid out, and will follow absolute positioning
   */
  None,
}

export enum FlexDirection {
  /**
   * Defines +x as the main axis
   * Items will be added from left to right in a row.
   */
  Row,

  /**
   * Defines +y as the main axis
   * Items will be added from top to bottom in a column.
   */
  Column,

  /**
   * Defines -x as the main axis
   * Items will be added from right to left in a row.
   */
  RowReverse,

  /**
   * Defines -y as the main axis
   * Items will be added from bottom to top in a column.
   */
  ColumnReverse,
}

export enum JustifyContent {
  /**
   * Items are packed toward the start of the main axis
   */
  FlexStart,

  /**
   * Items are packed toward the end of the main axis
   */
  FlexEnd,

  /**
   * Items are packed along the center of the main axis
   */
  Center,

  /**
   * The first and last items are aligned flush with the edges of the container (no gap)
   * The gaps between items are distributed evenly.
   */
  SpaceBetween,

  /**
   * The gap between the first and last items is exactly THE SAME as the gap between items.
   * The gaps are distributed evenly
   */
  SpaceEvenly,

  /**
   * The gap between the first and last items is exactly HALF the gap between items.
   * The gaps are distributed evenly in proportion to these ratios.
   */
  SpaceAround,
}

export enum PositionType {
  /**
   * The offset is computed relative to the final position given by the layout algorithm.
   * Offsets do not affect the position of any other items; they are effectively a correction factor applied at the end.
   */
  Relative,
  /**
   * The offset is computed relative to this item's closest positioned ancestor, if any.
   * Otherwise, it is placed relative to the origin.
   * No space is created for the item in the page layout, and its size will not be altered.
   * WARNING: to opt-out of layouting entirely, you must use [`Display::None`] instead on your [`Style`] object.
   */
  Absolute,
}

export enum FlexWrap {
  /**
   * Items will not wrap and stay on a single line
   */
  NoWrap,

  /**
   * Items will wrap according to this item's [`FlexDirection`]
   */
  Wrap,

  /**
   * Items will wrap in the opposite direction to this item's [`FlexDirection`]
   */
  WrapReverse,
}
