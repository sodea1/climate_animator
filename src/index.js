import { buttonMaker } from "./buttons";
import { initializeFog, createCanvas, renderButton } from "./emissions";
import { renderMap, iceMap1980, animate } from "./map";

document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();
  buttonMaker();
  // initializeFog();

  createCanvas();
  renderButton();
});
