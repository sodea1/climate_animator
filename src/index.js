import { buttonMaker } from "./buttons";
import { iceCapArea } from "./data";
import { buildFramework, renderMap, iceMap1980, iceMap1990, iceMap2003, iceMap2015, testMap, multiRender, calcArea, intervalDisplay, maps, animate } from "./map";

document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
});






// playButton.addEventListener("click", () => {
//     // let maps = [iceMap2000, iceMap2016];

//     // for(let i = 0; i < maps.length; i++) {
//     //     setInterval(renderMap(maps[i]), 2000);
//     // }
// });


  // setInterval(renderMap, 2000, iceMap1979);
