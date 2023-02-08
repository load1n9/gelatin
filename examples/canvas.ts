import { Allocator, JustifyContent, load, Node, PositionType } from "../mod.ts";
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
  positionType: PositionType.Absolute,
  width: 500,
  height: 500,
  justifyContent: JustifyContent.FlexStart,
});

// green
container.addChild(
  new Node(allocator, {
    width: "25%",
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
