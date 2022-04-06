import { buttonMaker } from "./buttons";
import { initializeFog } from "./emissions";
import { renderMap, iceMap1980, animate, example } from "./map";


document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();
  buttonMaker();
  initializeFog();
});
