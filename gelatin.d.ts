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

/**
 * The flexbox layout information for a single Node
 */
export interface Styles {
  /**
   * What layout strategy should be used?
   */
  display: Display;

  /**
   * The positioning strategy for this item.
   *
   * This controls both how the origin is determined for the [`Style::position`] field,
   * and whether or not the item will be controlled by flexbox's layout algorithm.
   */
  position: Position;

  /**
   * How should the position of this element be tweaked relative to the layout defined?
   */
  insetLeft: string | number;

  /**
   * How should the position of this element be tweaked relative to the layout defined?
   */
  insetRight: string | number;

  /**
   * How should the position of this element be tweaked relative to the layout defined?
   */
  insetTop: string | number;

  /**
   * How should the position of this element be tweaked relative to the layout defined?
   */
  insetBottom: string | number;

  /**
   * Sets the initial width of the item
   */
  width: string | number;

  /**
   * Sets the initial height of the item
   */
  height: string | number;

  /**
   * Controls the minimum width of the item
   */
  minWidth: string | number;

  /**
   * Controls the minimum height of the item
   */
  minHeight: string | number;

  /**
   * Controls the maximum width of the item
   */
  maxWidth: string | number;

  /**
   * Controls the maximum height of the item
   */
  maxHeight: string | number;

  /**
   * The ratio is calculated as width divided by height.
   */
  aspectRatio: number;

  /**
   * How large should the margin be on the left?
   */
  marginLeft: string | number;

  /**
   * How large should the margin be on the right?
   */
  marginRight: string | number;

  /**
   * How large should the margin be on the top?
   */
  marginTop: string | number;

  /**
   * How large should the margin be on the bottom?
   */
  marginBottom: string | number;

  /**
   * How large should the padding be on the left?
   */
  paddingLeft: string | number;

  /**
   * How large should the padding be on the right?
   */
  paddingRight: string | number;

  /**
   * How large should the padding be on the top?
   */
  paddingTop: string | number;

  /**
   * How large should the padding be on the bottom?
   */
  paddingBottom: string | number;

  /**
   * How large should the border be on the left?
   */
  borderLeft: string | number;

  /**
   * How large should the border be on the right?
   */
  borderRight: string | number;

  /**
   * How large should the border be on the top?
   */
  borderTop: string | number;

  /**
   * How large should the border be on the bottom?
   */
  borderBottom: string | number;

  /**
   * How this node's children aligned in the cross/block axis?
   */
  alignItems: AlignItems;

  /**
   * How this node should be aligned in the cross/block axis
   */
  alignSelf: AlignSelf;

  /**
   * How this node's children should be aligned in the inline axis
   */
  justifyItems: JustifyItems;

  /**
   * How this node should be aligned in the inline axis
   */
  justifySelf: JustifySelf;

  /**
   * How should content contained within this item be aligned in the cross/block axis
   */
  alignContent: AlignContent;

  /**
   * How should contained within this item be aligned in the main/inline axis
   */
  justifyContent: JustifyContent;

  /**
   * How large should the width of thegaps between items in a grid or flex container be?
   */
  gapWidth: string | number;

  /**
   * How large should the height of the gaps between items in a grid or flex container be?
   */
  gapHeight: string | number;

  /**
   * Which direction does the main axis flow in?
   */
  flexDirection: FlexDirection;

  /**
   * Should elements wrap, or stay in a single line?
   */
  flexWrap: FlexWrap;

  /**
   * Sets the initial main axis size of the item
   */
  flexBasis: string | number;

  /**
   * The relative rate at which this item grows when it is expanding to fill space
   */
  flexGrow: number;

  /**
   * The relative rate at which this item shrinks when it is contracting to fit into space
   */
  flexShrink: number;

  /**
   * UNIMPLEMENTED: Defines the track sizing functions (widths) of the grid rows
   */
  gridTemplateRows: undefined;

  /**
   * UNIMPLEMENTED: Defines the track sizing functions (heights) of the grid columns
   */
  gridTemplateColumns: undefined;

  /**
   * UNIMPLEMENTED: Defines the size of implicitly created rows
   */
  gridAutoRows: undefined;

  /**
   * UNIMPLEMENTED: Defined the size of implicitly created columns
   */
  gridAutoColumns: undefined;

  /**
   * Controls how items get placed into the grid for auto-placed items
   */
  gridAutoFlow: GridAutoFlow;

  /**
   * UNIMPLEMENTED: Defines which row in the grid the item should start and end at
   */
  gridRow: undefined;

  /**
   * UNIMPLEMENTED: Defines which column in the grid the item should start and end at
   */
  gridColumn: undefined;
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
   * Whether the node is childless
   */
  isChildless(): boolean;

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
