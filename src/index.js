import { buttonMaker } from "./buttons";
import { createCanvas, renderButton } from "./emissions";
import { renderMap, iceMap1980, animate } from "./map";
import { instructions } from "./modal";

document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();
  buttonMaker();
  
  instructions();
  createCanvas();
  renderButton();
});
