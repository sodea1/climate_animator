import { buttonMaker } from "./buttons";
import { renderMap, iceMap1980, animate } from "./map";

document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
});
