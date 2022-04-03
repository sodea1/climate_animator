import DataUtils, { glaciers, iceCapArea, seaLevel, tonnes } from "./data.js";
import { seaIceMapData, testing } from "./map.js";


document.addEventListener("DOMContentLoaded", () => {
//   // window.emissionsData = tonnes();
//   // window.iceAreaData = iceCapArea();
//   // window.sealvl = seaLevel();q
//   // window.glacier = seaIceMapData();

  
//   // let features = topojson.feature(testing);
//   // console.log(features);
//   // d3.json("../iceExtent.json", function (error, iceExtent) {
//   //   if (error) return console.error(error);
//   //   console.log(iceExtent);
//   // })

  d3.json("iceExtent.json", function (error, iceExtent) {

    if (error) return console.error(error);
    console.log(iceExtent);
  })  
});

