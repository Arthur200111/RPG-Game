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

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
export const context = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

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
aura.resume_animation()

function animate() {
  const animateId = window.requestAnimationFrame(animate);

  currentMap.draw();
  player.draw();
  aura.draw();

  if (keys.up && keys.last == "up") {
    currentMap.move(0, 6);
    player.change_direction("up");
  } else if (keys.down && keys.last == "down") {
    currentMap.move(0, -6);
    player.change_direction("down");
  } else if (keys.right && keys.last == "right") {
    currentMap.move(-6, 0);
    player.change_direction("right");
  } else if (keys.left && keys.last == "left") {
    currentMap.move(6, 0);
    player.change_direction("left");
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
