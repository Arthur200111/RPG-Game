import HitBox from "./hitBox";

export default class Zone {
  map: HitBox[] = [];
  code: number;
  color: string = "rgba(0,255,0,0.3)";

  constructor(opts: ZoneInterface) {
    this.code = opts.code;
    if (opts.color) {
      this.color = opts.color;
    }
    this.initMap(opts.map);
  }
  draw() {
    this.map.forEach((x) => {
      x.draw();
    });
  }
  move(dx: number, dy: number) {
    this.map.forEach((x) => {
      x.move(dx, dy);
    });
  }

  in_zone(hitBox: HitBox): boolean {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i].hitbox_sup(hitBox)) {
        return true;
      }
    }
    return false;
  }

  initMap(map: number[]): void {
    const zoneMap = [];
    for (let i = 0; i < map.length; i += 70) {
      zoneMap.push(map.slice(i, i + 70));
    }
    zoneMap.forEach((row: number[], i: number) => {
      row.forEach((symbol: number, j: number) => {
        if (symbol === this.code) {
          this.map.push(
            new HitBox({
              x: 48 * j - 1054,
              y: 48 * i - 760,
              width: 48,
              height: 48,
              color: this.color,
            })
          );
        }
      });
    });
  }
}
