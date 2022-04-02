const seaLvl = require('../data/seaLevel.json');
const maxIceMSM = require('../data/maxArcticIceMSM.json');

export const testData = [
	1, 2, 2, 2, 3, 4, 4
]



class DataUtils {
	constructor(seaLvl) {
		this.seaLvl = seaLvl;
	}

	iceCapArea(maxIceMSM) {
		// [ {} {} {} {} ]
		console.log(maxIceMSM);
	}
}

export default DataUtils;


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