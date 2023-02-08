// deno-lint-ignore-file no-explicit-any

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
  FlexStart,
  FlexEnd,
  Center,
  Stretch,
  SpaceBetween,
  SpaceAround,
}

export enum Direction {
  Inherit,
  LTR,
  RTL,
}

export enum Display {
  Flex,
  None,
}

export enum FlexDirection {
  Row,
  Column,
  RowReverse,
  ColumnReverse,
}

export enum JustifyContent {
  FlexStart,
  FlexEnd,
  Center,
  SpaceBetween,
  SpaceAround,
  SpaceEvenly,
}

export enum Overflow {
  Visible,
  Hidden,
  Scroll,
}

export enum PositionType {
  Relative,
  Absolute,
}

export enum FlexWrap {
  NoWrap,
  Wrap,
  WrapReverse,
}
export class Allocator {
  free(): void;
  constructor();
}

export interface Styles {
  display: Display;
  positionType: PositionType;
  direction: Direction;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  overflow: Overflow;
  alignItems: AlignItems;
  alignSelf: AlignSelf;
  alignContent: AlignContent;
  justifyContent: JustifyContent;
  start: string | number;
  end: string | number;
  top: string | number;
  bottom: string | number;
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
  width: string | number;
  height: string | number;
  minWidth: string | number;
  minHeight: string | number;
  maxWidth: string | number;
  maxHeight: string | number;
  aspectRatio: number;
}

export class Layout {
  free(): void;
  /**
   * @param {number} at
   * @returns {Layout}
   */
  child(at: number): Layout;
  /** */
  readonly childCount: number;
  /** */
  readonly height: number;
  /** */
  readonly width: number;
  /** */
  readonly x: number;
  /** */
  readonly y: number;
}

export class Node {
  free(): void;
  /**
   * @param {Allocator} allocator
   * @param {any} style
   */
  constructor(allocator: Allocator, style: Partial<Styles>);
  /**
   * @param {any} measure
   */
  setMeasure(measure: any): void;
  /**
   * @param {Node} child
   */
  addChild(child: Node): void;
  /**
   * @param {Node} child
   */
  removeChild(child: Node): void;
  /**
   * @param {number} index
   * @param {Node} child
   */
  replaceChildAtIndex(index: number, child: Node): void;
  /**
   * @param {number} index
   */
  removeChildAtIndex(index: number): void;
  /**
   * @returns {Partial<Styles>}
   */
  getStyle(): Partial<Styles>;
  /**
   * @param {Partial<Styles>} style
   */
  setStyle(style: Partial<Styles>): void;
  /** */
  markDirty(): void;
  /**
   * @returns {boolean}
   */
  isDirty(): boolean;
  /**
   * @param {any} size
   * @returns {Layout}
   */
  computeLayout(size?: any): Layout;
  /** */
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


export const source: any;