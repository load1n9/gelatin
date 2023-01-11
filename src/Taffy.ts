// deno-lint-ignore-file no-explicit-any no-unused-vars
import { Layout } from "./types.ts";
import { Style } from "./Style.ts";
import { Node } from "./Node.ts";
import * as wasm from "./wasm.js";
import { notLoadedError } from "./utils.ts";

export let loaded = false;

/**
 * loads the taffy wasm module
 */
export async function load(): Promise<void> {
  if (!loaded) {
    await wasm.default(wasm.source);
    loaded = true;
  }
}

/**
 * A tree of UI Nodes, suitable for UI layout
 */
export class Taffy {
  #ptr: number;
  constructor(capacity?: number, fromPtr = false) {
    if (!loaded) {
      throw notLoadedError;
    }
    this.#ptr = capacity
      ? !fromPtr ? wasm.taffy_with_capacity(capacity) : capacity
      : wasm.taffy_new();
  }

  /**
   * Creates a new Taffy that can store capacity nodes before reallocation
   */
  static withCapacity(capacity: number): Taffy {
    return new Taffy(capacity);
  }

  /**
   * Creates and adds a new unattached leaf node to the tree, and returns the new node
   */
  newLeaf(layout: Style, measure: any = null): Node {
    if (measure !== null) return this.newLeafWithMeasure(layout, measure);
    return new Node(wasm.taffy_new_leaf(this.#ptr, layout.ptr));
  }

  /**
   * Creates and adds a new unattached leaf node to the tree, and returns the [`NodeId`] of the new node
   * Creates and adds a new leaf node with a supplied [`MeasureFunc`]
   */
  newLeafWithMeasure(layout: Style, measure: any): Node {
    throw new Error("not implemented");
  }

  /**
   * Creates and adds a new node, which may have any number of `children`
   */
  newWithChildren(layout: Style, children: Node[]): number {
    throw new Error("not implemented");
  }

  /**
   * Removes all nodes
   * All associated [`Id`] will be rendered invalid.
   */
  clear() {
    wasm.taffy_clear(this.#ptr);
  }

  /**
   * Remove a specific [`Node`] from the tree
   * Its [`Id`] is marked as invalid. Returns the id of the node removed.
   */
  remove(node: Node) {
    throw new Error("not implemented");
  }

  /**
   * Sets the [`MeasureFunc`] of the associated node
   */
  setMeasure(node: Node, measure?: any) {
    throw new Error("not implemented");
  }

  /**
   * Adds a `child` [`Node`] under the supplied `parent`
   */
  addChild(parent: Node, child: Node) {
    throw new Error("not implemented");
  }

  /**
   * Directly sets the `children` of the supplied `parent`
   */
  setChildren(parent: Node, children: Node[]) {
    throw new Error("not implemented");
  }

  /**
   * Removes the `child` of the parent `node`
   * The child is not removed from the tree entirely, it is simply no longer attached to its previous parent.
   */
  removeChild(parent: Node, child: Node): Node {
    throw new Error("not implemented");
  }

  /**
   * Removes the child at the given `index` from the `parent`
   * The child is not removed from the tree entirely, it is simply no longer attached to its previous parent.
   */
  removeChildAtIndex(parent: Node, childIndex: number): Node {
    throw new Error("not implemented");
  }

  /**
   * Replaces the child at the given `child_index` from the `parent` node with the new `child` node
   * The child is not removed from the tree entirely, it is simply no longer attached to its previous parent.
   */
  replaceChildAtIndex(parent: Node, childIndex: number, newChild: Node): Node {
    throw new Error("not implemented");
  }

  /**
   * Returns the child [`Node`] of the parent `node` at the provided `child_index`
   */
  childAtIndex(parent: Node, childIndex: number): Node {
    throw new Error("not implemented");
  }

  /**
   * Returns the number of children of the `parent` [`Node`]
   */
  childCount(parent: Node): number {
    return wasm.taffy_child_count(this.#ptr, parent.ptr);
  }

  /**
   * Returns a list of children that belong to the [`Parent`]
   */
  children(parent: Node): Node[] {
    throw new Error("not implemented");
  }

  /**
   * Sets the [`Style`] of the provided `node`
   */
  setStyle(node: Node, style: Style) {
    throw new Error("not implemented");
  }

  /**
   * Gets the [`Style`] of the provided `node`
   */
  style(node: Node): Style {
    throw new Error("not implemented");
  }

  /**
   * Return this node layout relative to its parent
   */
  layout(node: Node): Layout {
    throw new Error("not implemented");
  }

  /**
   * Indicates whether the layout of this node (and its children) need to be recomputed
   */
  dirty(node: Node): boolean {
    throw new Error("not implemented");
  }

  /**
   * Updates the stored layout of the provided `node` and its children
   */
  computeLayout(node: Node, availableSpace: number): void {
    throw new Error("not implemented");
  }

  get ptr() {
    return this.#ptr;
  }
}
