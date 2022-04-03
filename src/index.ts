import "./styles/main.scss";
import Creature from "./modules/creature";
import mapImg from "./assets/pkmn_map.png";
import Map from "./modules/map";
import playerImgR from "./assets/playerRight.png";
import playerImgD from "./assets/playerDown.png";
import playerImgU from "./assets/playerUp.png";
import playerImgL from "./assets/playerLeft.png";
import livingEntity from "./modules/livingEntity";
import auraI from "./assets/aura.png";
import Sprite from "./modules/sprite";
import {
  collisionLeft,
  collisionDown,
  collisionRight,
  collisionUp,
} from "./assets/zones/collisionZones";
import Zone from "./modules/zone";
import HitBox from "./modules/hitBox";
import Collisions from "./modules/collisions";

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
export const context = canvas.getContext("2d");

export const collisions: Collisions = new Collisions({
  collisionDown: {
    code: 1027,
    map: collisionDown,
  },
  collisionRight: {
    code: 1029,
    map: collisionRight,
  },
  collisionUp: {
    code: 1033,
    map: collisionUp,
  },
  CollisionLeft: {
    code: 1031,
    map: collisionLeft,
  },
});

canvas.width = 1024;
canvas.height = 576;

const a: HitBox[] = [
  new HitBox({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }),
];

const keys: Keys = {
  up: false,
  right: false,
  left: false,
  down: false,
  last: "",
};

const bgImg = new Image();
bgImg.src = mapImg;

const currentMap = new Map({
  sprite: {
    img: bgImg,
    position: {
      x: -1054,
      y: -760,
    },
    frames: {
      max: 0,
      ellapsed_max: 0,
    },
  },
});

const playerDownImg = new Image();
playerDownImg.src = playerImgD;

const playerUpImg = new Image();
playerUpImg.src = playerImgU;

const playerLeftImg = new Image();
playerLeftImg.src = playerImgL;

const playerRightImg = new Image();
playerRightImg.src = playerImgR;

export const player = new livingEntity({
  sprite: {
    img: playerDownImg,
    position: {
      x: canvas.width / 2 - 192 / 8,
      y: canvas.height / 2 - 68 / 2,
    },
    frames: {
      max: 4,
      ellapsed_max: 10,
    },
  },
  images: {
    up: playerUpImg,
    down: playerDownImg,
    left: playerLeftImg,
    right: playerRightImg,
  },
  hitBox: {
    x: canvas.width / 2 - 192 / 8 + 6,
    y: canvas.height / 2 - 68 / 2 + 40,
    width: 36,
    height: 24,
    color: "rgba(255,0,0,0.4)",
  },
});

const auraImg = new Image();
auraImg.src = auraI;

const aura = new Sprite({
  frames: {
    max: 4,
    ellapsed_max: 10,
  },
  img: auraImg,
  position: {
    x: canvas.width / 2 - 192 / 8,
    y: canvas.height / 2,
  },
});
aura.resume_animation();

function animate() {
  const animateId = window.requestAnimationFrame(animate);

  currentMap.draw();
  player.draw();
  // player.hitBox.draw();
  aura.draw();
  // collisions.draw()

  if (keys.up && keys.last == "up") {
    player.change_direction("up");
    if (player.can_move(0,6,keys.last)) {
      currentMap.move(0, 6);
      collisions.move(0, 6);
    }
  } else if (keys.down && keys.last == "down") {
    player.change_direction("down");
    if (player.can_move(0,-6,keys.last)) {
      currentMap.move(0, -6);
      collisions.move(0, -6);
    }
  } else if (keys.right && keys.last == "right") {
    player.change_direction("right");
    if (player.can_move(-6,0,keys.last)) {
      currentMap.move(-6, 0);
      collisions.move(-6, 0);
    }
  } else if (keys.left && keys.last == "left") {
    player.change_direction("left");
    if (player.can_move(6,0,keys.last)) {
      currentMap.move(6, 0);
      collisions.move(6, 0);
    }
  } else if (player.animating) {
    player.stop_animation();
  }
}

animate();

document.addEventListener("keydown", (ev: KeyboardEvent) => {
  if (ev.key === "z" || ev.key === "ArrowUp") {
    keys.up = true;
    keys.last = "up";
  } else if (ev.key === "d" || ev.key === "ArrowRight") {
    keys.right = true;
    keys.last = "right";
  } else if (ev.key === "s" || ev.key === "ArrowDown") {
    keys.down = true;
    keys.last = "down";
  } else if (ev.key === "q" || ev.key === "ArrowLeft") {
    keys.left = true;
    keys.last = "left";
  }
});

document.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "z" || e.key === "ArrowUp") keys.up = false;
  else if (e.key === "d" || e.key === "ArrowRight") keys.right = false;
  else if (e.key === "s" || e.key === "ArrowDown") keys.down = false;
  else if (e.key === "q" || e.key === "ArrowLeft") keys.left = false;
});
