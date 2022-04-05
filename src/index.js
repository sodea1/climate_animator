import { buttonMaker } from "./buttons";
import { tonnes } from "./data";
import { emissionsGraph } from "./emissions_graph";
import { renderMap, iceMap1980, animate } from "./map";


document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
  // tonnes();
  emissionsGraph();
  // let arr = [1, 2, 3, 4, 5, 6, 8];
  const parseDate = d3.timeParse("%Y");
  let hash = [
    {year: 10, emissions: 100},
    {year: 11, emissions: 200},
    {year: 20, emissions: 300}
  ];

});
