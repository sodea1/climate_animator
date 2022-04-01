const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'climate-change75.p.rapidapi.com',
		'X-RapidAPI-Key': '6bb3ec8e98msh8b226fe3cdcba03p12e7dejsn34ae366e6c8b'
	}
};

fetch('https://climate-change75.p.rapidapi.com/seaLevel?startyear=1990&endyear=2000&select=seaLevelFromTideGaugesInches', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));