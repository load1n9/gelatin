import { encode } from "https://deno.land/std@0.145.0/encoding/base64.ts";
import { minify } from "https://jspm.dev/terser@5.12.1";

const name = Deno.args[0];
const target = "src/wasm.js";

export async function build() {
  if (!(await Deno.stat("Cargo.toml")).isFile) {
    console.log(`the build script should be executed in the "${name}" root`);
    Deno.exit(1);
  }
  const command = new Deno.Command("wasm-pack", {
    args: [
      "build",
      "--target",
      "web",
      "--release",
    ],
    stdin: "piped",
    stdout: "piped",
  });
  const child = command.spawn();
  const _status = await child.status;

  const wasm = await Deno.readFile(`pkg/${name}_bg.wasm`);
  console.log(`read wasm (size: ${wasm.length} bytes)`);
  const encoded = encode(wasm);
  console.log(
    `encoded wasm using base64 (increase: ${
      encoded.length -
      wasm.length
    } bytes, size: ${encoded.length} bytes)`,
  );

  const init = await Deno.readTextFile(`pkg/${name}.js`);
  console.log(`read js (size: ${init.length} bytes)`);

  const source =
    `export const source = Deno[Deno.internal].core.ops.op_base64_decode(${encoded});
${init}`;
  console.log(`inlined js and wasm (size: ${source.length} bytes)`);

  const output = await minify(source, {
    mangle: { module: true },
    output: {
      preamble: `// deno-lint-ignore-file\n// deno-fmt-ignore-file`,
    },
    // deno-lint-ignore no-explicit-any
  }, {}) as any;

  const reduction = new Blob([source]).size -
    new Blob([output.code]).size;
  console.log(
    `minified js (size reduction: ${reduction} bytes, size: ${output.code.length} bytes)`,
  );

  console.log(`writing output to file (${target})`);
  await Deno.writeTextFile(target, output.code);

  const outputFile = await Deno.stat(target);
  console.log(
    `final size is: ${outputFile.size} bytes`,
  );
}

if (import.meta.main) {
  await build();
  Deno.exit(1);
}
