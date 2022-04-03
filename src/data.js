const seaLvl = require('../data/seaLevel.json');
const iceAreaMSM = require('../data/maxArcticIceMSM.json');
const greenhouseGas = require('../data/greenhouseGasEmissions.json');
const iceExtData = require('../data/masie_ice_r00_v01_2022091_4km.json');

export const iceCapArea = () => {
	let iceData = {};
	iceAreaMSM.forEach((el) => {
		iceData[el['year']] = parseFloat(el['minArcticIceMilSqKilometers']);
	})
	return iceData;
}

export const tonnes = () => {
	let emissionsData = {};

	greenhouseGas.forEach((el) => {
		emissionsData[el['year']] = parseInt(el['tonnes']);
	})
	
	return emissionsData;
}

export const seaLevel = () => {
	let seaLvlData = {};

	seaLvl.forEach((el) => {
		if (el['year'] < 1993) {
			seaLvlData[el['year']] = parseFloat(el['seaLevelFromTideGaugesInches']);
		} else {
			seaLvlData[el['year']] = parseFloat(el['seaLevelFromSatellitesInches']);
		}
	})

	return seaLvlData;
}

export const seaIceMapData = () => {
	let polyJSON = iceExtData['features'];
	// let projection = d3.geoEquirectangular();
	// let geoGenerator = d3.geoPath().projection(projection);
	// debugger;
	// return geoGenerator(polyJSON);
	return polyJSON;
}
// FOR TESTING COORDS //////////////////////////

// const coords = [[-36.414697, 83.042322], [-35.820159, 82.681465], [-39.190083, 82.426804], [-40.668184, 82.740144], [-40.631649, 82.868689
// 	], [-39.873271, 82.831663], [-39.172849, 82.79753], [-38.571387, 82.90879], [-36.951021,
// 		83.136915
// 	],
// 	[
// 		-37.39536,
// 		83.30892
// 	],
// 	[
// 		-36.112312,
// 		83.365067
// 	],
// 	[
// 		-35.826929,
// 		83.271507
// 	],
// 	[
// 		-36.414697,
// 		83.042322
// 	]
// ]



// export default DataUtils;


/////////////// FETCH ///////////////////////

// return fetch('https://climate-change75.p.rapidapi.com/seaIceArctic', options)
// 	.then(response => response.json())
// 	.then(response => {
// 		let data = response;
// 		return data;
// 	})
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'climate-change75.p.rapidapi.com',
// 		'X-RapidAPI-Key': '65ea497c18msh7fb47851fa239e9p1b9359jsna2d0f32ffc3f'
// 	}
// };