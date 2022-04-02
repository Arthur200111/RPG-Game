import Sprite from "./sprite";

export default class livingEntity extends Sprite {
  images: DirectionImages;

  constructor(opts: livingEntityInterface) {
    super(opts.sprite);
    this.images = opts.images;
  }
  change_direction(direction: string = "down") {
    this.image = this.images[direction];
  }
}
