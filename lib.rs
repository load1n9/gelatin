use taffy::prelude::*;
use wasm_bindgen::{prelude::wasm_bindgen, __rt::WasmRefCell};

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

    taffy.borrow_mut().child_count(node.borrow_mut().to_owned()).unwrap()
} 