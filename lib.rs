use taffy::prelude::*;
use wasm_bindgen::{__rt::WasmRefCell, prelude::wasm_bindgen};

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
