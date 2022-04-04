import { schemeBrBG } from "d3";

export const iceMap1979 = require("../ice_ext_197909.json");
export const iceMap2016 = require("../ice_ext_201609.json");

export function buildFramework() {

    /// practice
    d3.select("body")
        .append("svg")
        .attr("width", 900)
        .attr("height", 800);

    d3.select("svg")
        .append("path")

    let pixels = projection([1170000.0, 2216000.0]);
    console.log(pixels);

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
    let maps = [iceMap1979, iceMap2016];

    let features = maps[0].features;

    console.log(features);
    let width = 900;
    let height = 500;
    let margin = 50;
    
    let svg = d3.select("body")
        .append("svg")
        .attr("viewBox", "0 0" + " " + width + " " + height);
        // .attr("width", width)
        // .attr("height", height);
        

    let projection = d3.geoAzimuthalEquidistant()
        .fitSize([width, height], {type: "FeatureCollection", features: features});
        // .scale(1)
        // .translate(100, 100);
    

    let path = d3.geoPath().projection(projection);

    svg.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr("id", 'path-id')
        .attr('d', path)
        .attr('class', 'ice-coords')
        .attr("fill", "#7FFFD4");

}



// 1. access a set of coordinates