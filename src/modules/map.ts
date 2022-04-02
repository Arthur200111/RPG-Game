import { context } from "..";
import Movable from "./movable";
import Sprite from "./sprites";

export default class Map extends Sprite {
  position: Movable;
  constructor(opts: MapInterface) {
    super(opts.sprite);
    this.position = new Movable(opts.position)
  }
  draw() {
    context.drawImage(this.image, this.position.x,this.position.y)
  }
}
