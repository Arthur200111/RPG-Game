export default class Movable {
  x: number;
  y: number;

  constructor(opts: Position) {
    this.x = opts.x;
    this.y = opts.y;
  }

  move(dx: number, dy: number){
    this.x += dx;
    this.y += dy;
  }
}
