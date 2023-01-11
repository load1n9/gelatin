// deno-lint-ignore-file no-unused-vars
import { load, Taffy } from "../mod.ts";

await load();

const t1 = new Taffy();
// with capacity 15
const t2 = new Taffy(15);
// same as previous but matches rust api
const t3 = Taffy.withCapacity(15);