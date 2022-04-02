import "./styles/main.scss";
import Creature from "./modules/creature";
import mapImg from "./assets/pkmn_map.png";
import Map from "./modules/map";

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
  },
  position: {
    x: -1054,
    y: -760,
  },
});

function animate() {
  const animateId = window.requestAnimationFrame(animate);

  currentMap.draw()

  if (keys.up && keys.last == "up") currentMap.position.move(0, 6);
  else if (keys.down && keys.last == "down") currentMap.position.move(0, -6);
  else if (keys.right && keys.last == "right") currentMap.position.move(-6, 0);
  else if (keys.left && keys.last == "left") currentMap.position.move(6, 0);
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
