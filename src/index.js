import DataUtils, { glaciers, iceCapArea, seaIceMapData, seaLevel, tonnes } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // window.emissionsData = tonnes();
  // window.iceAreaData = iceCapArea();
  // window.sealvl = seaLevel();
  window.glacier = seaIceMapData();
});



// // from masie file {
// "type": "FeatureCollection",
//   "features": 
// }