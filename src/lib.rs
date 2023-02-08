#![allow(non_snake_case)]

mod utils;

use std::cell::RefCell;
use std::rc::Rc;

use js_sys::Function;
use js_sys::Reflect;
use taffy::tree::LayoutTree;
use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum AlignItems {
    FlexStart,
    FlexEnd,
    Start,
    End,
    Center,
    Baseline,
    Stretch,
}

impl Into<taffy::style::AlignItems> for AlignItems {
    fn into(self) -> taffy::style::AlignItems {
        match self {
            AlignItems::FlexStart => taffy::style::AlignItems::FlexStart,
            AlignItems::FlexEnd => taffy::style::AlignItems::FlexEnd,
            AlignItems::Start => taffy::style::AlignItems::Start,
            AlignItems::End => taffy::style::AlignItems::End,
            AlignItems::Center => taffy::style::AlignItems::Center,
            AlignItems::Baseline => taffy::style::AlignItems::Baseline,
            AlignItems::Stretch => taffy::style::AlignItems::Stretch,
        }
    }
}

impl From<i32> for AlignItems {
    fn from(n: i32) -> Self {
        match n {
            0 => AlignItems::FlexStart,
            1 => AlignItems::FlexEnd,
            2 => AlignItems::Start,
            3 => AlignItems::End,
            4 => AlignItems::Center,
            5 => AlignItems::Baseline,
            6 => AlignItems::Stretch,
            _ => AlignItems::Stretch,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum AlignSelf {
    FlexStart,
    FlexEnd,
    Start,
    End,
    Center,
    Baseline,
    Stretch,
}

impl Into<taffy::style::AlignSelf> for AlignSelf {
    fn into(self) -> taffy::style::AlignSelf {
        match self {
            AlignSelf::FlexStart => taffy::style::AlignSelf::FlexStart,
            AlignSelf::FlexEnd => taffy::style::AlignSelf::FlexEnd,
            AlignSelf::Start => taffy::style::AlignSelf::Start,
            AlignSelf::End => taffy::style::AlignSelf::End,
            AlignSelf::Center => taffy::style::AlignSelf::Center,
            AlignSelf::Baseline => taffy::style::AlignSelf::Baseline,
            AlignSelf::Stretch => taffy::style::AlignSelf::Stretch,
        }
    }
}

impl From<i32> for AlignSelf {
    fn from(n: i32) -> Self {
        match n {
            0 => AlignSelf::FlexStart,
            1 => AlignSelf::FlexEnd,
            2 => AlignSelf::Start,
            3 => AlignSelf::End,
            4 => AlignSelf::Center,
            5 => AlignSelf::Baseline,
            6 => AlignSelf::Stretch,
            _ => AlignSelf::Start,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum AlignContent {
    FlexStart,
    FlexEnd,
    Start,
    End,
    Center,
    Stretch,
    SpaceBetween,
    SpaceAround,
}

impl Into<taffy::style::AlignContent> for AlignContent {
    fn into(self) -> taffy::style::AlignContent {
        match self {
            AlignContent::FlexStart => taffy::style::AlignContent::FlexStart,
            AlignContent::FlexEnd => taffy::style::AlignContent::FlexEnd,
            AlignContent::Start => taffy::style::AlignContent::FlexStart,
            AlignContent::End => taffy::style::AlignContent::FlexEnd,
            AlignContent::Center => taffy::style::AlignContent::Center,
            AlignContent::Stretch => taffy::style::AlignContent::Stretch,
            AlignContent::SpaceBetween => taffy::style::AlignContent::SpaceBetween,
            AlignContent::SpaceAround => taffy::style::AlignContent::SpaceAround,
        }
    }
}

impl From<i32> for AlignContent {
    fn from(n: i32) -> Self {
        match n {
            0 => AlignContent::FlexStart,
            1 => AlignContent::FlexEnd,
            2 => AlignContent::Start,
            3 => AlignContent::End,
            4 => AlignContent::Center,
            5 => AlignContent::Stretch,
            6 => AlignContent::SpaceBetween,
            7 => AlignContent::SpaceAround,
            _ => AlignContent::Stretch,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Display {
    Flex,
    None,
}

impl Into<taffy::style::Display> for Display {
    fn into(self) -> taffy::style::Display {
        match self {
            Display::Flex => taffy::style::Display::Flex,
            Display::None => taffy::style::Display::None,
        }
    }
}

impl From<i32> for Display {
    fn from(n: i32) -> Self {
        match n {
            0 => Display::Flex,
            1 => Display::None,
            _ => Display::Flex,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum FlexDirection {
    Row,
    Column,
    RowReverse,
    ColumnReverse,
}

impl Into<taffy::style::FlexDirection> for FlexDirection {
    fn into(self) -> taffy::style::FlexDirection {
        match self {
            FlexDirection::Row => taffy::style::FlexDirection::Row,
            FlexDirection::Column => taffy::style::FlexDirection::Column,
            FlexDirection::RowReverse => taffy::style::FlexDirection::RowReverse,
            FlexDirection::ColumnReverse => taffy::style::FlexDirection::ColumnReverse,
        }
    }
}

impl From<i32> for FlexDirection {
    fn from(n: i32) -> Self {
        match n {
            0 => FlexDirection::Row,
            1 => FlexDirection::Column,
            2 => FlexDirection::RowReverse,
            3 => FlexDirection::ColumnReverse,
            _ => FlexDirection::Row,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum JustifyContent {
    FlexStart,
    FlexEnd,
    Start,
    End,
    Center,
    SpaceBetween,
    SpaceAround,
    SpaceEvenly,
}

impl Into<taffy::style::JustifyContent> for JustifyContent {
    fn into(self) -> taffy::style::JustifyContent {
        match self {
            JustifyContent::FlexStart => taffy::style::JustifyContent::FlexStart,
            JustifyContent::FlexEnd => taffy::style::JustifyContent::FlexEnd,
            JustifyContent::Start => taffy::style::JustifyContent::Start,
            JustifyContent::End => taffy::style::JustifyContent::End,
            JustifyContent::Center => taffy::style::JustifyContent::Center,
            JustifyContent::SpaceBetween => taffy::style::JustifyContent::SpaceBetween,
            JustifyContent::SpaceAround => taffy::style::JustifyContent::SpaceAround,
            JustifyContent::SpaceEvenly => taffy::style::JustifyContent::SpaceEvenly,
        }
    }
}

impl From<i32> for JustifyContent {
    fn from(n: i32) -> Self {
        match n {
            0 => JustifyContent::FlexStart,
            1 => JustifyContent::FlexEnd,
            2 => JustifyContent::Start,
            3 => JustifyContent::End,
            4 => JustifyContent::Center,
            5 => JustifyContent::SpaceBetween,
            6 => JustifyContent::SpaceAround,
            7 => JustifyContent::SpaceEvenly,
            _ => JustifyContent::FlexStart,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Position {
    Relative,
    Absolute,
}

impl Into<taffy::style::Position> for Position {
    fn into(self) -> taffy::style::Position {
        match self {
            Position::Relative => taffy::style::Position::Relative,
            Position::Absolute => taffy::style::Position::Absolute,
        }
    }
}

impl From<i32> for Position {
    fn from(n: i32) -> Self {
        match n {
            0 => Position::Relative,
            1 => Position::Absolute,
            _ => Position::Relative,
        }
    }
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum FlexWrap {
    NoWrap,
    Wrap,
    WrapReverse,
}

impl Into<taffy::style::FlexWrap> for FlexWrap {
    fn into(self) -> taffy::style::FlexWrap {
        match self {
            FlexWrap::NoWrap => taffy::style::FlexWrap::NoWrap,
            FlexWrap::Wrap => taffy::style::FlexWrap::Wrap,
            FlexWrap::WrapReverse => taffy::style::FlexWrap::WrapReverse,
        }
    }
}

impl From<i32> for FlexWrap {
    fn from(n: i32) -> Self {
        match n {
            0 => FlexWrap::NoWrap,
            1 => FlexWrap::Wrap,
            2 => FlexWrap::WrapReverse,
            _ => FlexWrap::NoWrap,
        }
    }
}

#[wasm_bindgen]
#[derive(Clone, Debug)]
pub struct Layout {
    #[wasm_bindgen(readonly)]
    pub width: f32,

    #[wasm_bindgen(readonly)]
    pub height: f32,

    #[wasm_bindgen(readonly)]
    pub x: f32,

    #[wasm_bindgen(readonly)]
    pub y: f32,

    #[wasm_bindgen(readonly)]
    pub childCount: usize,

    children: Vec<Layout>,
}

#[wasm_bindgen]
impl Layout {
    fn new(allocator: &Allocator, node: taffy::node::Node) -> Layout {
        let taffy = allocator.stretch.borrow();
        let layout = taffy.layout(node).unwrap();
        let children = taffy.children(node).unwrap();

        Layout {
            width: layout.size.width,
            height: layout.size.height,
            x: layout.location.x,
            y: layout.location.y,
            childCount: children.len(),
            children: children
                .into_iter()
                .map(|child| Layout::new(allocator, child))
                .collect(),
        }
    }

    #[wasm_bindgen]
    pub fn child(&self, at: usize) -> Layout {
        self.children[at].clone()
    }
}

#[wasm_bindgen]
#[derive(Clone)]
pub struct Allocator {
    stretch: Rc<RefCell<taffy::Taffy>>,
}

#[wasm_bindgen]
impl Allocator {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {
            stretch: Rc::new(RefCell::new(taffy::Taffy::new())),
        }
    }
}

#[wasm_bindgen]
pub struct Node {
    allocator: Allocator,
    node: taffy::node::Node,
    style: JsValue,

    #[wasm_bindgen(readonly)]
    pub childCount: usize,
}

#[wasm_bindgen]
impl Node {
    #[wasm_bindgen(constructor)]
    pub fn new(allocator: &Allocator, style: &JsValue) -> Self {
        Self {
            allocator: allocator.clone(),
            node: allocator
                .stretch
                .borrow_mut()
                .new_with_children(parse_style(&style), &Vec::new())
                .unwrap(),
            style: style.clone(),
            childCount: 0,
        }
    }

    #[wasm_bindgen(js_name = setMeasure)]
    pub fn set_measure(&mut self, measure: &JsValue) {
        let _measure = Function::from(measure.clone());

        self.allocator
            .stretch
            .borrow_mut()
            .set_measure(
                self.node,
                // Some(stretch::node::MeasureFunc::Boxed(Box::new(
                //     move |constraints| {
                //         use stretch::number::OrElse;

                //         let widthConstraint =
                //             if let stretch::number::Number::Defined(val) = constraints.width {
                //                 val.into()
                //             } else {
                //                 JsValue::UNDEFINED
                //             };

                //         let heightConstaint =
                //             if let stretch::number::Number::Defined(val) = constraints.height {
                //                 val.into()
                //             } else {
                //                 JsValue::UNDEFINED
                //             };

                //         if let Ok(result) =
                //             measure.call2(&JsValue::UNDEFINED, &widthConstraint, &heightConstaint)
                //         {
                //             let width = get_f32(&result, "width");
                //             let height = get_f32(&result, "height");

                //             if width.is_some() && height.is_some() {
                //                 return stretch::geometry::Size {
                //                     width: width.unwrap(),
                //                     height: height.unwrap(),
                //                 };
                //             }
                //         }

                //         constraints.map(|v| v.or_else(0.0))
                //     },
                // ))),
                None,
            )
            .unwrap();
    }

    #[wasm_bindgen(js_name = addChild)]
    pub fn add_child(&mut self, child: &Node) {
        self.allocator
            .stretch
            .borrow_mut()
            .add_child(self.node, child.node)
            .unwrap();
        self.childCount += 1;
    }

    #[wasm_bindgen(js_name = removeChild)]
    pub fn remove_child(&mut self, child: &Node) {
        self.allocator
            .stretch
            .borrow_mut()
            .remove_child(self.node, child.node)
            .unwrap();
        self.childCount -= 1;
    }

    #[wasm_bindgen(js_name = replaceChildAtIndex)]
    pub fn replace_child_at_index(&mut self, index: usize, child: &Node) {
        self.allocator
            .stretch
            .borrow_mut()
            .replace_child_at_index(self.node, index, child.node)
            .unwrap();
    }

    #[wasm_bindgen(js_name = removeChildAtIndex)]
    pub fn remove_child_at_index(&mut self, index: usize) {
        self.allocator
            .stretch
            .borrow_mut()
            .remove_child_at_index(self.node, index)
            .unwrap();
        self.childCount -= 1;
    }

    #[wasm_bindgen(js_name = getStyle)]
    pub fn get_style(&self) -> JsValue {
        self.style.clone()
    }

    #[wasm_bindgen(js_name = setStyle)]
    pub fn set_style(&mut self, style: &JsValue) {
        self.allocator
            .stretch
            .borrow_mut()
            .set_style(self.node, parse_style(style))
            .unwrap();
        self.style = style.clone();
    }

    #[wasm_bindgen(js_name = markDirty)]
    pub fn mark_dirty(&mut self) {
        self.allocator
            .stretch
            .borrow_mut()
            .mark_dirty(self.node)
            .unwrap()
    }

    #[wasm_bindgen(js_name = isDirty)]
    pub fn is_dirty(&self) -> bool {
        self.allocator.stretch.borrow().dirty(self.node).unwrap()
    }

    #[wasm_bindgen(js_name = computeLayout)]
    pub fn compute_layout(&mut self, size: &JsValue) -> Layout {
        self.allocator
            .stretch
            .borrow_mut()
            .compute_layout(
                self.node,
                taffy::geometry::Size {
                    width: if let Some(val) = get_f32(size, "width") {
                        taffy::number::Number::Defined(val)
                    } else {
                        stretch::number::Number::Undefined
                    },
                    height: if let Some(val) = get_f32(size, "height") {
                        stretch::number::Number::Defined(val)
                    } else {
                        stretch::number::Number::Undefined
                    },
                },
            )
            .unwrap();
        Layout::new(&self.allocator, self.node)
    }
}

fn parse_style(style: &JsValue) -> taffy::style::Style {
    taffy::style::Style {
        display: get_i32(style, "display")
            .map(|i| Display::from(i).into())
            .unwrap_or_default(),
        position: get_i32(style, "position")
            .map(|i| Position::from(i).into())
            .unwrap_or_default(),
        flex_direction: get_i32(style, "flexDirection")
            .map(|i| FlexDirection::from(i).into())
            .unwrap_or_default(),
        flex_wrap: get_i32(style, "flexWrap")
            .map(|i| FlexWrap::from(i).into())
            .unwrap_or_default(),
        align_items: get_i32(style, "alignItems")
            .map(|i| Some(AlignItems::from(i).into()))
            .unwrap_or_default(),
        align_self: get_i32(style, "alignSelf")
            .map(|i| Some(AlignSelf::from(i).into()))
            .unwrap_or_default(),
        align_content: get_i32(style, "alignContent")
            .map(|i| Some(AlignContent::from(i).into()))
            .unwrap_or_default(),
        justify_content: get_i32(style, "justifyContent")
            .map(|i| Some(JustifyContent::from(i).into()))
            .unwrap_or_default(),

        // position: taffy::geometry::Rect {
        //     start: get_dimension(style, "start"),
        //     end: get_dimension(style, "end"),
        //     top: get_dimension(style, "top"),
        //     bottom: get_dimension(style, "bottom"),
        // },

        margin: taffy::geometry::Rect {
            left: get_dimension(style, "marginStart"),
            right: get_dimension(style, "marginEnd"),
            top: get_dimension(style, "marginTop"),
            bottom: get_dimension(style, "marginBottom"),
        },

        padding: taffy::geometry::Rect {
            left: get_dimension(style, "paddingStart"),
            right: get_dimension(style, "paddingEnd"),
            top: get_dimension(style, "paddingTop"),
            bottom: get_dimension(style, "paddingBottom"),
        },

        border: taffy::geometry::Rect {
            left: get_dimension(style, "borderStart"),
            right: get_dimension(style, "borderEnd"),
            top: get_dimension(style, "borderTop"),
            bottom: get_dimension(style, "borderBottom"),
        },

        flex_grow: get_f32(style, "flexGrow").unwrap_or(0.0),
        flex_shrink: get_f32(style, "flexShrink").unwrap_or(1.0),
        flex_basis: get_dimension(style, "flexBasis"),

        size: taffy::geometry::Size {
            width: get_size_dimension(style, "width"),
            height: get_size_dimension(style, "height"),
        },

        min_size: taffy::geometry::Size {
            width: get_size_dimension(style, "minWidth"),
            height: get_size_dimension(style, "minHeight"),
        },

        max_size: taffy::geometry::Size {
            width: get_size_dimension(style, "maxWidth"),
            height: get_size_dimension(style, "maxHeight"),
        },

        aspect_ratio: get_f32(style, "aspectRatio")
    }
}

fn get_size_dimension(obj: &JsValue, key: &str) -> taffy::style::Dimension {
    let dimension = get_dimension(obj, key);
    match dimension {
        taffy::style::Dimension::Auto => taffy::style::Dimension::Auto,
        _ => dimension,
    }
}

fn get_dimension(obj: &JsValue, key: &str) -> stretch::style::Dimension {
    if has_key(obj, key) {
        if let Ok(val) = Reflect::get(obj, &key.into()) {
            if let Some(number) = val.as_f64() {
                return stretch::style::Dimension::Points(number as f32);
            }
            if let Some(string) = val.as_string() {
                if string == "auto" {
                    return stretch::style::Dimension::Auto;
                }
                if let Ok(number) = string.parse::<f32>() {
                    return stretch::style::Dimension::Points(number);
                }
                if string.ends_with('%') {
                    let len = string.len();
                    if let Ok(number) = string[..len - 1].parse::<f32>() {
                        return stretch::style::Dimension::Percent(number / 100.0);
                    }
                }
            }
        }
    }
    stretch::style::Dimension::Undefined
}

fn get_i32(obj: &JsValue, key: &str) -> Option<i32> {
    if has_key(obj, key) {
        if let Ok(val) = Reflect::get(obj, &key.into()) {
            return val.as_f64().map(|v| v as i32);
        }
    }
    None
}

fn get_f32(obj: &JsValue, key: &str) -> Option<f32> {
    if has_key(obj, key) {
        if let Ok(val) = Reflect::get(obj, &key.into()) {
            return val.as_f64().map(|v| v as f32);
        }
    }
    None
}

fn has_key(obj: &JsValue, key: &str) -> bool {
    if let Ok(exists) = Reflect::has(obj, &key.into()) {
        exists
    } else {
        false
    }
}
