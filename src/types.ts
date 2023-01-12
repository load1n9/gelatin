// deno-lint-ignore-file no-explicit-any

//TODO: The following
type Display = any;
type Position = any;
type Rect<T> = any;
type Size<T> = any;
type LengthPercentageAuto = any;
type LengthPercentage = any;
type AlignItems = any;
type AlignSelf = any;
type AlignContent = any;
type JustifyContent = any;
type FlexDirection = any;
type FlexWrap = any;
type Dimension = any;

export interface StyleOptions {
  display: Display;
  position: Position;
  inset: Rect<LengthPercentageAuto>;
  size: Size<Dimension>;
  min_size: Size<Dimension>;
  max_size: Size<Dimension>;
  aspect_ratio?: number;
  margin: Rect<LengthPercentageAuto>;
  padding: Rect<LengthPercentage>;
  border: Rect<LengthPercentage>;
  align_items?: AlignItems;
  align_self?: AlignSelf;
  justify_self?: AlignSelf;
  align_content?: AlignContent;
  justify_content?: JustifyContent;
  gap: Size<LengthPercentage>;
  flex_direction: FlexDirection;
  flex_wrap: FlexWrap;
  flex_basis: Dimension;
  flex_grow: number;
  flex_shrink: number;
}
