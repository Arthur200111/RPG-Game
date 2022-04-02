declare module "*.png";

interface Position {
  x: number;
  y: number;
}

interface SpriteInterface {
  img: HTMLImageElement;
}

interface hitBoxInterface {
  x: number;
  y: number;
  color?: string;
}

interface CreatureInterface {
  sprite: SpriteInterface;
}

interface MapInterface {
  sprite: SpriteInterface;
  position: Position;
}

interface Keys{
  up: boolean;
  down : boolean;
  right: boolean;
  left: boolean;
  last: string;
}