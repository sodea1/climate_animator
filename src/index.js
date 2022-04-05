import { buttonMaker } from "./buttons";
import { txtGetter } from "./interactions";
import { renderMap, iceMap1980, animate } from "./map";


document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
  txtGetter();

//   const fs = require('fs');

//   fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });
});
