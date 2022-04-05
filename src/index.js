import { buttonMaker } from "./buttons";
import { tonnes } from "./data";
// import { txtGetter } from "./interactions";
import { renderMap, iceMap1980, animate } from "./map";


document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
  tonnes()
});
