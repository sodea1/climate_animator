const seaLvl = require('../data/seaLevel.json');
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
}

export const seaLevel = () => {
	let seaLvlData = {};

	seaLvl.forEach((el) => {
		if (el.year < 1993) {
			seaLvlData[el.year] = parseFloat(el.seaLevelFromTideGaugesInches);
		} else {
			seaLvlData[el.year] = parseFloat(el.seaLevelFromSatellitesInches);
		}
	});

	return seaLvlData;
};


