use taffy::prelude::*;
use wasm_bindgen::{__rt::WasmRefCell, prelude::wasm_bindgen};

#[wasm_bindgen]
pub enum _Dimension {
    Points,
    Percent,
    Auto,
    Undefined,
}

#[wasm_bindgen]
pub enum _AlignItems {
    FlexStart,
    FlexEnd,
    Center,
    Baseline,
    Stretch,
}
#[wasm_bindgen]
pub enum _AlignSelf {
    Auto,
    FlexStart,
    FlexEnd,
    Center,
    Baseline,
    Stretch,
}

#[wasm_bindgen]
pub enum _AlignContent {
    FlexStart,
    FlexEnd,
    Center,
    Stretch,
    SpaceBetween,
    SpaceEvenly,
    SpaceAround,
}

#[wasm_bindgen]
pub enum _Display {
    Flex,
    None,
}

#[wasm_bindgen]
pub enum _FlexDirection {
    Row,
    Column,
    RowReverse,
    ColumnReverse,
}

#[wasm_bindgen]
pub enum _JustifyContent {
    FlexStart,
    FlexEnd,
    Center,
    SpaceBetween,
    SpaceEvenly,
    SpaceAround,
}

#[wasm_bindgen]
pub enum _PositionType {
    Relative,
    Absolute,
}

#[wasm_bindgen]
pub enum _FlexWrap {
    NoWrap,
    Wrap,
    WrapReverse,
}

fn _encode_align_items(align_type: _AlignItems) -> AlignItems {
    match align_type {
        _AlignItems::FlexStart => AlignItems::FlexStart,
        _AlignItems::FlexEnd => AlignItems::FlexEnd,
        _AlignItems::Center => AlignItems::Center,
        _AlignItems::Baseline => AlignItems::Baseline,
        _AlignItems::Stretch => AlignItems::Stretch,
    }
}

fn _encode_align_self(align_type: _AlignSelf) -> AlignSelf {
    match align_type {
        _AlignSelf::Auto => AlignSelf::Auto,
        _AlignSelf::FlexStart => AlignSelf::FlexStart,
        _AlignSelf::FlexEnd => AlignSelf::FlexEnd,
        _AlignSelf::Center => AlignSelf::Center,
        _AlignSelf::Baseline => AlignSelf::Baseline,
        _AlignSelf::Stretch => AlignSelf::Stretch,
    }
}

fn _encode_align_content(align_type: _AlignContent) -> AlignContent {
    match align_type {
        _AlignContent::FlexStart => AlignContent::FlexStart,
        _AlignContent::FlexEnd => AlignContent::FlexEnd,
        _AlignContent::Center => AlignContent::Center,
        _AlignContent::Stretch => AlignContent::Stretch,
        _AlignContent::SpaceBetween => AlignContent::SpaceBetween,
        _AlignContent::SpaceEvenly => AlignContent::SpaceEvenly,
        _AlignContent::SpaceAround => AlignContent::SpaceAround,
    }
}

fn _encode_display(display_type: _Display) -> Display {
    match display_type {
        _Display::Flex => Display::Flex,
        _Display::None => Display::None,
    }
}

fn _encode_flex_direction(flex_direction: _FlexDirection) -> FlexDirection {
    match flex_direction {
        _FlexDirection::Row => FlexDirection::Row,
        _FlexDirection::Column => FlexDirection::Column,
        _FlexDirection::RowReverse => FlexDirection::RowReverse,
        _FlexDirection::ColumnReverse => FlexDirection::ColumnReverse,
    }
}

fn _encode_justify_content(justify_content: _JustifyContent) -> JustifyContent {
    match justify_content {
        _JustifyContent::FlexStart => JustifyContent::FlexStart,
        _JustifyContent::FlexEnd => JustifyContent::FlexEnd,
        _JustifyContent::Center => JustifyContent::Center,
        _JustifyContent::SpaceBetween => JustifyContent::SpaceBetween,
        _JustifyContent::SpaceEvenly => JustifyContent::SpaceEvenly,
        _JustifyContent::SpaceAround => JustifyContent::SpaceAround,
    }
}

fn _encode_position_type(position_type: _PositionType) -> PositionType {
    match position_type {
        _PositionType::Relative => PositionType::Relative,
        _PositionType::Absolute => PositionType::Absolute,
    }
}

fn _encode_flex_wrap(flex_wrap: _FlexWrap) -> FlexWrap {
    match flex_wrap {
        _FlexWrap::NoWrap => FlexWrap::NoWrap,
        _FlexWrap::Wrap => FlexWrap::Wrap,
        _FlexWrap::WrapReverse => FlexWrap::WrapReverse,
    }
}

fn encode_dimension(dim: _Dimension, value: f32) -> Dimension {
    match dim {
        _Dimension::Points => Dimension::Points(value),
        _Dimension::Percent => Dimension::Percent(value),
        _Dimension::Auto => Dimension::Auto,
        _Dimension::Undefined => Dimension::Undefined,
    }
}

#[wasm_bindgen]
pub fn encode_rect(
    left: _Dimension,
    left_value: f32,
    right: _Dimension,
    right_value: f32,
    top: _Dimension,
    top_value: f32,
    bottom: _Dimension,
    bottom_value: f32,
) -> u32 {
    let rect = Rect {
        left: encode_dimension(left, left_value),
        right: encode_dimension(right, right_value),
        top: encode_dimension(top, top_value),
        bottom: encode_dimension(bottom, bottom_value),
    };
    Box::into_raw(Box::new(WasmRefCell::new(rect))) as u32
}

#[wasm_bindgen]
pub fn encode_size(
    width: _Dimension,
    width_value: f32,
    height: _Dimension,
    height_value: f32,
) -> u32 {
    let size = Size {
        width: encode_dimension(width, width_value),
        height: encode_dimension(height, height_value),
    };
    Box::into_raw(Box::new(WasmRefCell::new(size))) as u32
}

#[wasm_bindgen]
pub fn encode_size_zero() -> u32 {
    let size = Size::ZERO;
    Box::into_raw(Box::new(WasmRefCell::new(size))) as u32
}

#[wasm_bindgen]
pub fn encode_size_undefined() -> u32 {
    let size = Size::UNDEFINED;
    Box::into_raw(Box::new(WasmRefCell::new(size))) as u32
}


#[wasm_bindgen]
pub fn style_default() -> u32 {
    let style = Style::default();
    Box::into_raw(Box::new(WasmRefCell::new(style))) as u32
}

#[wasm_bindgen]
pub fn taffy_new() -> u32 {
    let taffy = Taffy::new();
    Box::into_raw(Box::new(WasmRefCell::new(taffy))) as u32
}

#[wasm_bindgen]
pub fn taffy_with_capacity(capacity: usize) -> u32 {
    let taffy = Taffy::with_capacity(capacity);
    Box::into_raw(Box::new(WasmRefCell::new(taffy))) as u32
}

#[wasm_bindgen]
pub fn taffy_clear(taffy: u32) {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };
    taffy.borrow_mut().clear();
}

#[wasm_bindgen]
pub fn taffy_new_leaf(taffy: u32, style: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let style = style as *mut WasmRefCell<Style>;
    wasm_bindgen::__rt::assert_not_null(style);
    let style = unsafe { &*style };

    let leaf = taffy.borrow_mut().new_leaf(style.borrow_mut().to_owned());
    Box::into_raw(Box::new(WasmRefCell::new(leaf.unwrap()))) as u32
}

#[wasm_bindgen]
pub fn taffy_child_count(taffy: u32, node: u32) -> usize {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    taffy
        .borrow_mut()
        .child_count(node.borrow_mut().to_owned())
        .unwrap()
}

#[wasm_bindgen]
pub fn taffy_remove(taffy: u32, node: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .remove(node.borrow_mut().to_owned())
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_add_child(taffy: u32, node: u32, child: u32) {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    let child = child as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(child);
    let child = unsafe { &*child };
    taffy
        .borrow_mut()
        .add_child(node.borrow_mut().to_owned(), child.borrow_mut().to_owned())
        .unwrap();
}

#[wasm_bindgen]
pub fn taffy_remove_child(taffy: u32, node: u32, child: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    let child = child as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(child);
    let child = unsafe { &*child };
    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .remove_child(node.borrow_mut().to_owned(), child.borrow_mut().to_owned())
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_remove_child_at_index(taffy: u32, node: u32, index: usize) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .remove_child_at_index(node.borrow_mut().to_owned(), index)
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_replace_child_at_index(taffy: u32, node: u32, index: usize, child: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    let child = child as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(child);
    let child = unsafe { &*child };
    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .replace_child_at_index(
                node.borrow_mut().to_owned(),
                index,
                child.borrow_mut().to_owned(),
            )
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_child_at_index(taffy: u32, node: u32, index: usize) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .child_at_index(node.borrow_mut().to_owned(), index)
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_style(taffy: u32, node: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .style(node.borrow_mut().to_owned())
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_layout(taffy: u32, node: u32) -> u32 {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    Box::into_raw(Box::new(WasmRefCell::new(
        taffy
            .borrow_mut()
            .layout(node.borrow_mut().to_owned())
            .unwrap(),
    ))) as u32
}

#[wasm_bindgen]
pub fn taffy_set_style(taffy: u32, node: u32, style: u32) {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    let style = style as *mut WasmRefCell<Style>;
    wasm_bindgen::__rt::assert_not_null(style);
    let style = unsafe { &*style };

    taffy
        .borrow_mut()
        .set_style(node.borrow_mut().to_owned(), style.borrow_mut().to_owned())
        .unwrap();
}

#[wasm_bindgen]
pub fn taffy_dirty(taffy: u32, node: u32) -> bool {
    let taffy = taffy as *mut WasmRefCell<Taffy>;
    wasm_bindgen::__rt::assert_not_null(taffy);
    let taffy = unsafe { &*taffy };

    let node = node as *mut WasmRefCell<Node>;
    wasm_bindgen::__rt::assert_not_null(node);
    let node = unsafe { &*node };

    taffy
        .borrow_mut()
        .dirty(node.borrow_mut().to_owned())
        .unwrap()
}
