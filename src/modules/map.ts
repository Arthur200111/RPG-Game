import { context } from "..";
import Sprite from "./sprite";

export default class Map extends Sprite {
  position: Position;
  constructor(opts: MapInterface) {
    super(opts.sprite);
    this.position = this.position
  }
  draw() {
    context.drawImage(this.image, this.position.x,this.position.y)
  }
}
