//// HOW TO IMPORT CONSTANTS
// import {testData} from './data.js';

let seaLvl = require('../data/seaLevel.json');
const maxIceMSM = require('../data/maxArcticIceMSM.json');
import DataUtils from "./data.js";


document.addEventListener("DOMContentLoaded", () => {
  d3.select("h1").style("background-color", "yellow");
  let projection = d3.geoEquirectangular();
  
  console.log(projection([-3.0026, 16.7666]));
  
  // console.log(seaLvl);
  // seaLvl.forEach((el) => {
  //   console.log(el.year);
  //   console.log(el.seaLevelFromTideGaugesCentimeters);
  // })
  //  const dataset = new DataUtils();
  //  console.log(dataset);
  //  return dataset.seaLvl();
});


