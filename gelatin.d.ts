export enum AlignItems {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  Baseline,
  Stretch,
}

export enum JustifyItems {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  Baseline,
  Stretch,
}

export enum JustifySelf {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  Baseline,
  Stretch,
}

export enum AlignSelf {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  Baseline,
  Stretch,
}

export enum AlignContent {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  Stretch,
  SpaceBetween,
  SpaceAround,
}

export enum Display {
  Flex,
  Grid,
  None,
}

export enum FlexDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse,
}

export enum GridAutoFlow {
  Row,
  Column,
  RowDense,
  ColumnDense,
}

export enum JustifyContent {
  FlexStart,
  FlexEnd,
  Start,
  End,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
}

export enum Position {
  Relative,
  Absolute,
}

export enum FlexWrap {
  NoWrap,
  Wrap,
  WrapReverse,
}

/**
 * Allocator class
 */
export class Allocator {
  /**
   * Free's the memory
   */
  free(): void;
  constructor();
}

export interface Styles {
  display: Display;
  position: Position;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  alignItems: AlignItems;
  alignSelf: AlignSelf;
  alignContent: AlignContent;
  justifyContent: JustifyContent;
  justifySelf: JustifySelf;
  justifyItems: JustifyItems;
  insetStart: string | number;
  insetEnd: string | number;
  insetTop: string | number;
  insetBottom: string | number;
  marginStart: string | number;
  marginEnd: string | number;
  marginTop: string | number;
  marginBottom: string | number;
  paddingStart: string | number;
  paddingEnd: string | number;
  paddingTop: string | number;
  paddingBottom: string | number;
  borderStart: string | number;
  borderEnd: string | number;
  borderTop: string | number;
  borderBottom: string | number;
  flexGrow: number;
  flexShrink: number;
  flexBasis: string | number;
  gapWidth: string | number;
  gapHeight: string | number;
  width: string | number;
  height: string | number;
  minWidth: string | number;
  minHeight: string | number;
  maxWidth: string | number;
  maxHeight: string | number;
  aspectRatio: number;
}

/**
 * Layout class
 */
export class Layout {
  /**
   * Free's the layout of its children
   */
  free(): void;

  /**
   * Gets a child at the given index
   */
  child(at: number): Layout;

  /**
   * Number of children
   */
  readonly childCount: number;

  /**
   * Height in pixels
   */
  readonly height: number;

  /**
   * Width in pixels
   */
  readonly width: number;

  /**
   * X coordinate
   */
  readonly x: number;

  /**
   * Y coordinate
   */
  readonly y: number;
}

/**
 * Node class
 */
export class Node {
  /**
   * Free's the node of its children
   */
  free(): void;
  constructor(allocator: Allocator, style: Partial<Styles>);

  /**
   * Sets the measure
   */
  setMeasure(measure: unknown): void;

  /**
   * Add a child node to the node
   */
  addChild(child: Node): void;

  /**
   * Removes the child from the node
   */
  removeChild(child: Node): void;

  /**
   * Replaces the child at the current index with another child
   */
  replaceChildAtIndex(index: number, child: Node): void;

  /**
   * Removes child at the given index
   */
  removeChildAtIndex(index: number): void;

  /**
   * Gets the node's styles
   */
  getStyle(): Partial<Styles>;

  /**
   * Sets the styles of the current node
   */
  setStyle(style: Partial<Styles>): void;

  /**
   * Marks the node as dirty
   */
  markDirty(): void;

  /**
   * Whether the node is dirty
   */
  isDirty(): boolean;

  /**
   * Computes the layout for the node and its children
   */
  computeLayout(
    size?: { width: "max" | "min" | number; height: "max" | "min" | number },
  ): Layout;

  /**
   * The amount of children that belong to this node
   */
  readonly childCount: number;
}

export type InitInput =
  | RequestInfo
  | URL
  | Response
  | BufferSource
  | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_layout_free: (a: number) => void;
  readonly __wbg_get_layout_width: (a: number) => number;
  readonly __wbg_get_layout_height: (a: number) => number;
  readonly __wbg_get_layout_x: (a: number) => number;
  readonly __wbg_get_layout_y: (a: number) => number;
  readonly __wbg_get_layout_childCount: (a: number) => number;
  readonly layout_child: (a: number, b: number) => number;
  readonly __wbg_allocator_free: (a: number) => void;
  readonly allocator_new: () => number;
  readonly __wbg_node_free: (a: number) => void;
  readonly __wbg_get_node_childCount: (a: number) => number;
  readonly node_new: (a: number, b: number) => number;
  readonly node_setMeasure: (a: number, b: number) => void;
  readonly node_addChild: (a: number, b: number) => void;
  readonly node_removeChild: (a: number, b: number) => void;
  readonly node_replaceChildAtIndex: (a: number, b: number, c: number) => void;
  readonly node_removeChildAtIndex: (a: number, b: number) => void;
  readonly node_getStyle: (a: number) => number;
  readonly node_setStyle: (a: number, b: number) => void;
  readonly node_markDirty: (a: number) => void;
  readonly node_isDirty: (a: number) => number;
  readonly node_computeLayout: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {SyncInitInput} module
 *
 * @returns {InitOutput}
 */
export function initSync(module: SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {InitInput | Promise<InitInput>} module_or_path
 *
 * @returns {Promise<InitOutput>}
 */
export default function init(
  module_or_path?: InitInput | Promise<InitInput>,
): Promise<InitOutput>;

export const source: Uint8Array;
