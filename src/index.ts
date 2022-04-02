import "./styles/main.scss";
import changeText from "./functionApi";
import cubeImg from './assets/collision.png'

const textBtn : HTMLButtonElement = <HTMLButtonElement>document.getElementById("textBtn");

textBtn.addEventListener("click", changeText);

const htmlImg : HTMLImageElement = <HTMLImageElement>document.getElementById('cube')
htmlImg.src = cubeImg;

changeText();
