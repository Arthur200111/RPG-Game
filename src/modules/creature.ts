import Sprite from "./sprites";

export default class Creature extends Sprite {
  constructor(opts: CreatureInterface) {
    super(opts.sprite);
  }
  getPos() {
    console.log(this.image);
  }
}
