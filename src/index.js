//// HOW TO IMPORT CONSTANTS
// import {testData} from './data.js';

import DataUtils, { iceCapArea, tonnes } from "./data.js";


document.addEventListener("DOMContentLoaded", () => {
  window.emissionsData = tonnes();
  window.iceAreaData = iceCapArea();

  // document.querySelector('').innerHTML = "";
});

