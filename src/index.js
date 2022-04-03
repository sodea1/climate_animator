import DataUtils, { glaciers, iceCapArea, seaLevel, tonnes } from "./data.js";
import { seaIceMapData } from "./map.js";


document.addEventListener("DOMContentLoaded", () => {
  // window.emissionsData = tonnes();
  // window.iceAreaData = iceCapArea();
  // window.sealvl = seaLevel();q
  window.glacier = seaIceMapData();
  
});

