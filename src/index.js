import { buttonMaker } from "./buttons";
import { createCanvas, renderButton } from "./emissions";
import { renderMap, iceMap1980, animate } from "./map";
import { instructions } from "./modal";

document.addEventListener("DOMContentLoaded", () => {
  const instructionsBtn = document.getElementsByClassName("instructions-link");

  instructionsBtn[0].addEventListener("click", () => {
    document.getElementsByClassName("modal")[0].classList.remove("hide");
  })

  renderMap(iceMap1980);
  animate();
  buttonMaker();
  
  instructions();
  createCanvas();
  renderButton();
});
