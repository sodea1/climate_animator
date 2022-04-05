const interactions = require('../interactions.json');


export const testing = (yr) => {
  let iceData = {};
  iceAreaMSM.forEach((el) => {
    iceData[el.year] = parseFloat(el.minArcticIceMilSqMiles);
  });
  return iceData[yr];
};