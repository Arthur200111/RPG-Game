import { context, player } from "..";

export default class Sprite {
  image: HTMLImageElement;
  position: Position;
  frames: Frames;
  width: number;
  height: number;
  animating: boolean;

  constructor(opts: SpriteInterface) {
    this.image = opts.img;
    this.position = opts.position;
    this.frames = opts.frames;
    this.animating = false;
    this.frames.current = 0;
    this.frames.ellapsed = 9;
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
  }
  draw() {
    this.animate_sprite();
    context.drawImage(
      this.image,
      this.width * this.frames.current,
      0,
      this.width,
      this.image.height,
      this.position.x,
      this.position.y,
      this.width,
      this.image.height
    );
  }
  move(dx: number, dy: number) {
    this.position.x += dx;
    this.position.y += dy;
    player.resume_animation()
  }
  animate_sprite() {
    if (this.animating) {
      this.frames.ellapsed =
        (this.frames.ellapsed + 1) % this.frames.ellapsed_max;
      if (this.frames.ellapsed == 0) {
        this.frames.current = (this.frames.current + 1) % this.frames.max;
      }
    }
  }
  stop_animation() {
    this.animating = false;
    this.frames.current = 0;
    this.frames.ellapsed = 9;
  }
  resume_animation() {
    this.animating = true;
  }
}
