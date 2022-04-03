import { collisions } from "..";
import HitBox from "./hitBox";
import Sprite from "./sprite";

export default class livingEntity extends Sprite {
  images: DirectionImages;
  hitBox: HitBox;

  constructor(opts: livingEntityInterface) {
    super(opts.sprite);
    this.images = opts.images;
    this.hitBox = new HitBox(opts.hitBox);
  }
  can_move(dx: number, dy: number, mvmt: string): boolean {
    this.hitBox.x -= dx;
    this.hitBox.y -= dy;
    const b = !collisions.is_in(this.hitBox, mvmt);
    this.hitBox.x += dx;
    this.hitBox.y += dy;
    return b;
  }
  change_direction(direction: string = "down") {
    this.image = this.images[direction];
  }
}
