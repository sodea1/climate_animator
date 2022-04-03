export const iceMapData = require("../masie_ice_r00_v01_2022091_4km.json");

export function buildFramework() {
    d3.select("body")
        .append("svg")
        .attr("width", 900)
        .attr("height", 800);

    d3.select("svg")
        .append("path")

    let coords = [
        [100, 100],
        [200, 200],
        [400, 400],
        [500, 500]
    ]
    let lineGenerator = d3.line();

    let data = lineGenerator(coords);
    console.log(data)

    d3.select('path')
        .attr('d', data);

}

export function convertCoords() {
    let features = iceMapData;
    
    let svg = d3.select('body')
        .append('svg')
        .attr("width", 900)
        .attr("height", 800);

    let projection = d3.geoMercator();

    let path = d3.geoPath().projection(projection);

    d3.json("../masie_ice_r00_v01_2022091_4km.json", function(err, jsonObj) {
        console.log(jsonObj);
    }) 
    
    // features.forEach((feat) => {
    //     console.log(feat.geometry.coordinates);
    // })
}



// 1. access a set of coordinates