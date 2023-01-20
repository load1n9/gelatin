import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  PositionType,
  Rect,
  Size,
} from "../mod.ts";

type Dimension = [number, number];
export interface StyleOptions {
  /**
   * What layout strategy should be used?
   */
  display: Display;
  /**
   * What should the `position` value of this struct use as a base offset?
   */
  positionType: PositionType;
  /**
   * Which direction does the main axis flow in?
   */
  flexDirection: FlexDirection;
  /**
   * Should elements wrap, or stay in a single line?
   */
  flexWrap: FlexWrap;
  /**
   * How should items be aligned relative to the cross axis?
   */
  alignItems: AlignItems;
  /**
   * Should this item violate the cross axis alignment specified by its parent's [`AlignItems`]?
   */
  alignSelf: AlignSelf;
  /**
   * How should content contained within this item be aligned relative to the cross axis?
   */
  alignContent: AlignContent;
  /**
   * How should items be aligned relative to the main axis?
   */
  justifyContent: JustifyContent;
  /**
   * How should the position of this element be tweaked relative to the layout defined?
   */
  position: Rect /**<Dimension>*/;
  /**
   * How large should the margin be on each side?
   */
  margin: Rect /**<Dimension>*/;
  /**
   * How large should the padding be on each side?
   */
  padding: Rect /**<Dimension>*/;
  /**
   * How large should the border be on each side?
   */
  border: Rect /**<Dimension>*/;
  /**
   * Gap
   * How large should the gaps between items in a grid or flex container be?
   */
  gap: Size /**<Dimension>*/;
  /**
   * The relative rate at which this item grows when it is expanding to fill space
   * 0.0 is the default value, and this value must not be negative.
   */
  flexGrow: number;
  /**
   * The relative rate at which this item shrinks when it is contracting to fit into space
   * 1.0 is the default value, and this value must not be negative.
   */
  flexShrink: number;
  /**
   * Sets the initial main axis size of the item
   */
  flexBasis: Dimension;
  /**
   * Sets the initial size of the item
   */
  size: Size /**<Dimension>*/;
  /**
   * Controls the minimum size of the item
   */
  minSize: Size /**<Dimension>*/;
  /**
   * Controls the maximum size of the item
   */
  maxSize: Size /**<Dimension>*/;
  /**
   * Sets the preferred aspect ratio for the item
   * The ratio is calculated as width divided by height.
   */
  aspectRatio?: number;
}
