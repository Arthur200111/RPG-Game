declare module "*.png";

interface Position {
  x: number;
  y: number;
}

interface Frames {
  current?: number;
  max: number;
  ellapsed?: number;
  ellapsed_max: number;
}

interface SpriteInterface {
  frames: Frames;
  img: HTMLImageElement;
  position: Position;
}

interface CreatureInterface {
  sprite: SpriteInterface;
}

interface MapInterface {
  sprite: SpriteInterface;
}

interface Keys {
  up: boolean;
  down: boolean;
  right: boolean;
  left: boolean;
  last: string;
}

interface DirectionImages {
  [up: string]: HTMLImageElement;
  down: HTMLImageElement;
  left: HTMLImageElement;
  right: HTMLImageElement;
}

interface hitBoxInterface {
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
}

interface livingEntityInterface {
  hitBox: hitBoxInterface;
  sprite: SpriteInterface;
  images: DirectionImages;
  hp?: number;
}

interface ZoneInterface {
  code: number;
  map: number[];
  color?: string;
}

interface CollisionsInterface{
  collisionUp: ZoneInterface;
  collisionDown: ZoneInterface;
  collisionRight: ZoneInterface;
  CollisionLeft: ZoneInterface;
}