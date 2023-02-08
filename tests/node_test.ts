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
