const iceAreaMSM = require('../data/maxArcticIceMSM.json');
const greenhouseGas = require('../data/greenhouseGasEmissions.json');

export const iceCapArea = (yr) => {
	let iceData = [];
	iceAreaMSM.forEach((el) => {
		iceData[el.year] = parseFloat(el.minArcticIceMilSqMiles);
	});
	return iceData[yr];
};

export const tonnes = () => {
	return greenhouseGas;
};



