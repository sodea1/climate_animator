import DataUtils, { glaciers, iceCapArea, seaLevel, tonnes } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // window.emissionsData = tonnes();
  // window.iceAreaData = iceCapArea();
  // window.sealvl = seaLevel();
  window.glacier = glaciers();
});

