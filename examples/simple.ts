import { load, Style, Taffy } from "../mod.ts";

await load();

// basic taffy declaration
const t1 = new Taffy();
console.log("t1: " + t1.ptr);

// with capacity 15
const t2 = new Taffy(15);
console.log("t2: " + t2.ptr);

// same as previous but matches rust api
const t3 = Taffy.withCapacity(15);
console.log("t3: " + t3.ptr);

// clear
t1.clear();

// new style with default
const s1 = new Style();
console.log("s1: " + s1.ptr);

// alias
const s2 = Style.default();
console.log("s2: " + s2.ptr);

// new leaf
const l1 = t1.newLeaf(s1);
console.log("l1: " + l1.ptr);

console.log("child count: " + t1.childCount(l1));
