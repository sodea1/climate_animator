//// HOW TO IMPORT CONSTANTS
// import {testData} from './data.js';

const seaLvl = require('../data/seaLevel.json');
const maxIceMSM = require('../data/maxArcticIceMSM.json');
import DataUtils from "./data.js";


document.addEventListener("DOMContentLoaded", () => {
  console.log(seaLvl);
  // seaLvl.forEach((el) => {
  //   console.log(el.year);
  //   console.log(el.seaLevelFromTideGaugesCentimeters);
  // })
  //  const dataset = new DataUtils();
  //  console.log(dataset);
  //  return dataset.seaLvl();
});


