//// HOW TO IMPORT CONSTANTS
// import {testData} from './data.js';

let seaLvl = require('../data/seaLevel.json');
let maxIceMSM = require('../data/maxArcticIceMSM.json');
let greenhouseGas = require('../data/greenhouseGasEmissions.json');
let json = require('../data/testmap.json');
import DataUtils from "./data.js";


document.addEventListener("DOMContentLoaded", () => {
  setInterval( () => {

  }, 5)
  for(let i = 0; i < greenhouseGas[0].length; i++) {

  }
  console.log(greenhouseGas[0])
  console.log(json[0].features[0].geometry.coordinates[0][0][0]);
  console.log(json[0].features[0].geometry.coordinates[0][0][1]);
  
  // console.log(geoJSON);

  // d3.select('.map-container')
  //   .selectAll('p')
  //   .data(maxIceMSM)
  //   .enter()
  //   .append('div')
  //   .classed('bar', true);
    

  // d3.select("h1").style("background-color", "aqua");

  // let projection = d3.geoEquirectangular();
  
  // console.log(projection([-3.0026, 16.7666]));

  // console.log(seaLvl);
  // seaLvl.forEach((el) => {
  //   console.log(el.year);
  //   console.log(el.seaLevelFromTideGaugesCentimeters);
  // })
  //  const dataset = new DataUtils();
  //  console.log(dataset);
  //  return dataset.seaLvl();
});

