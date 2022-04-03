export const iceMapData = require("../iceExtent.json");

export function buildFramework() {
    d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500);

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
    let features = iceMapData['features'];
    features.forEach((feat) => {
        
    })
}



// 1. access a set of coordinates