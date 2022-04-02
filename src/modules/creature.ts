import Sprite from "./sprite";

export default class Creature extends Sprite {
  constructor(opts: CreatureInterface) {
    super(opts.sprite);
  }
  getPos() {
    console.log(this.image);
  }
}
