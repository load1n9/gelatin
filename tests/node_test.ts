import {
  assertEquals,
  assertInstanceOf,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { Layout, load, Style, Taffy } from "../mod.ts";

await load();
Deno.test("new leaf", () => {
  const taffy = new Taffy();
  const res = taffy.newLeaf(Style.default());
  assertEquals(taffy.childCount(res), 0);
});

Deno.test("remove node, should remove", () => {
  const taffy = new Taffy();

  const node = taffy.newLeaf(Style.default());

  const _ = taffy.remove(node);
});

Deno.test("remove last node", () => {
  const taffy = new Taffy();

  const parent = taffy.newLeaf(Style.default());
  const child = taffy.newLeaf(Style.default());
  taffy.addChild(parent, child);

  taffy.remove(child);
  taffy.remove(parent);
});

Deno.test("add child", () => {
  const taffy = new Taffy();

  const node = taffy.newLeaf(Style.default());
  assertEquals!(taffy.childCount(node), 0);

  const child0 = taffy.newLeaf(Style.default());
  taffy.addChild(node, child0);
  assertEquals!(taffy.childCount(node), 1);

  const child1 = taffy.newLeaf(Style.default());
  taffy.addChild(node, child1);
  assertEquals!(taffy.childCount(node), 2);
});

Deno.test("layout", () => {
  const taffy = new Taffy();
  
  const node = taffy.newLeaf(Style.default());
  const res = taffy.layout(node);
  assertInstanceOf(res, Layout);
});

