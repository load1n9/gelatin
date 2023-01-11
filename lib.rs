use taffy::prelude::*;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn taffy_new() -> i32 {
    let mut _taffy = Taffy::new();
    return 1;
}

#[wasm_bindgen]
pub fn taffy_with_capacity(capacity: usize) -> i32 {
    let mut _taffy = Taffy::with_capacity(capacity);
    return 1;
}
