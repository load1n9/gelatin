import { Allocator, JustifyContent, load, Node, Position } from "../mod.ts";

import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";

await load();

const allocator = new Allocator();

Deno.test("25% width", () => {
  const node = new Node(allocator, {
    position: Position.Absolute,
    width: 100,
    height: 100,
    justifyContent: JustifyContent.Center,
  });
  node.addChild(new Node(allocator, { width: "25%", height: "auto" }));
  const layout = node.computeLayout();
  assertEquals(layout.child(0).width, 25);
});

Deno.test("100% width", () => {
  const node = new Node(allocator, {
    position: Position.Absolute,
    width: 100,
    height: 100,
    justifyContent: JustifyContent.Center,
  });
  node.addChild(new Node(allocator, { width: "100%", height: "auto" }));
  const layout = node.computeLayout();
  assertEquals(layout.child(0).width, 100);
});

Deno.test("add child", () => {
  const node = new Node(allocator, {});
  node.addChild(new Node(allocator, {}));
  assertEquals(node.childCount, 1);
});
Deno.test("remove child", () => {
  const node = new Node(allocator, {});
  const child = new Node(allocator, {});
  node.addChild(child);
  node.removeChild(child);
  assertEquals(node.childCount, 0);
});

Deno.test("remove child at index", () => {
  const node = new Node(allocator, {});
  const child0 = new Node(allocator, {});
  const child1 = new Node(allocator, {});
  const child2 = new Node(allocator, {});
  node.addChild(child0);
  node.addChild(child1);
  node.addChild(child2);
  node.removeChildAtIndex(1);
  assertEquals(node.childCount, 2);
});

Deno.test("replace child at index", () => {
  const node = new Node(allocator, {});
  const child0 = new Node(allocator, {});
  const child1 = new Node(allocator, {});
  const child2 = new Node(allocator, {});
  node.addChild(child0);
  node.addChild(child1);
  node.replaceChildAtIndex(1, child2);
  assertEquals(node.childCount, 2);
});
