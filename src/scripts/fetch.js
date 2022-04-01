const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'climate-change75.p.rapidapi.com',
		'X-RapidAPI-Key': '65ea497c18msh7fb47851fa239e9p1b9359jsna2d0f32ffc3f'
	}
};

fetch('https://climate-change75.p.rapidapi.com/seaLevel?startyear=1990&endyear=2000&select=seaLevelFromTideGaugesInches', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));