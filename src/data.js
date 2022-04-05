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
	let emissionsData = [];

	greenhouseGas.forEach((el) => {
		let yr = el.year;
		let tonne = el.tonnes;
		emissionsData.push({year: yr, emissions: tonne});
	});
	
	return emissionsData;
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



/////////////// FETCH ///////////////////////

// return fetch('https://climate-change75.p.rapidapi.com/seaIceArctic', options)
// 	.then(response => response.json())
// 	.then(response => {
// 		let data = response;
// 		return data;
// 	})
// 	.catch(err => console.error(err));

