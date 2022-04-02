const seaLvl = require('../data/seaLevel.json');
const iceAreaMSM = require('../data/maxArcticIceMSM.json');
const greenhouseGas = require('../data/greenhouseGasEmissions.json');
const glacierCoord = require('../data/glaciers.json');

export const iceCapArea = () => {
	let iceData = {};
	iceAreaMSM.forEach((el) => {
		iceData[el['year']] = parseFloat(el['minArcticIceMilSqMiles']);
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

export const glaciers = () => {
	console.log(glacierCoord);
}


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