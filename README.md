# Gelatin

[![Tags](https://img.shields.io/github/release/load1n9/gelatin)](https://github.com/load1n9/gelatin/releases)
[![Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/gluten/mod.ts)
[![License](https://img.shields.io/github/license/load1n9/gelatin)](https://github.com/load1n9/gelatin/blob/main/LICENSE)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/load1n9)

speedy wasm layout library for Deno using
[taffy](https://github.com/DioxusLabs/taffy)

## Usage

```ts
import {
  Allocator,
  Display,
  JustifyContent,
  load,
  Node,
  Position,
} from "https://deno.land/x/gelatin/mod.ts";
import {
  mainloop,
  WindowCanvas,
} from "https://deno.land/x/dwm@0.3.0/ext/canvas.ts";

const win = new WindowCanvas({
  title: "Stretch",
  width: 500,
  height: 500,
  resizable: true,
  floating: true,
});

await load();

const allocator = new Allocator();

const container = new Node(allocator, {
  position: Position.Absolute,
  width: 500,
  height: 500,
  justifyContent: JustifyContent.FlexStart,
});

// green
container.addChild(
  new Node(allocator, {
    marginStart: 0,
    width: "35%",
    height: "100%",
  }),
);

// purple
container.addChild(
  new Node(allocator, {
    width: "25%",
    height: "50%",
  }),
);

addEventListener("resize", (event) => {
  const styles = container.getStyle();
  styles.width = event.width;
  styles.height = event.height;
  container.setStyle(styles);
});

win.onDraw = (ctx) => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  const layout = container.computeLayout();
  ctx.fillStyle = "#44911B";
  ctx.fillRect(
    layout.child(0).x,
    layout.child(0).y,
    layout.child(0).width,
    layout.child(0).height,
  );
  ctx.fillStyle = "#ff00ff";
  ctx.fillRect(
    layout.child(1).x,
    layout.child(1).y,
    layout.child(1).width,
    layout.child(1).height,
  );
};

await mainloop(() => {
  win.draw();
});
```

![demo](https://raw.githubusercontent.com/load1n9/gelatin/main/assets/demo.png)

## Maintainers

- Dean Srebnik ([@load1n9](https://github.com/load1n9))

## License

[Apache-2.0](./LICENSE) licensed.

Copyright 2023 © Dean Srebnik
