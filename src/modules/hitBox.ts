import { context } from "..";
import livingEntity from "./livingEntity";

export default class HitBox {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string = "rgba(0,0,0,0.2)";

  constructor(opts: hitBoxInterface) {
    this.x = opts.x;
    this.y = opts.y;
    this.width = opts.width;
    this.height = opts.height;
    if (opts.color) {
      this.color = opts.color;
    }
  }
  hitbox_sup(hitBox: HitBox): boolean {
    return (
      hitBox.x + hitBox.width >= this.x + 2 &&
      hitBox.x <= this.x + this.width - 2 &&
      hitBox.y <= this.y + this.height - 2 &&
      hitBox.y + hitBox.height >= this.y + 2
    );
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}
