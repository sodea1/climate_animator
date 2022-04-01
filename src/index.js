const fs = require('fs')

import { readFile } from 'fs';
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Hello world!");
// });

// import Example from "./scripts/functionality";
// import DataUtils from "./scripts/data";

readFile('../data/greenhouseGasEmissions', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// document.addEventListener("DOMContentLoaded", () => { // when the DOM is loaded, get the main tag from index.html & create a new example passing in main object
//     let dataHoe = new DataUtils();
//     dataHoe.seaIceArctic(); 
   
//     console.log('this project is janky yo');
//     let pee = document.querySelector('p');
//     pee.innerHTML = 'fuck this is hard';
// });