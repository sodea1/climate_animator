import { schemeBrBG } from "d3";

export const iceMapData = require("../masie_ice_r00_v01_2022091_4km.json");

export function buildFramework() {
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
    let features = iceMapData['features'];
    console.log(features);

    let width = 600;
    let height = 500;
    let margin = 50
    
    let svg = d3.select("body")
        .append("svg")
        .attr("viewBox", "10 10" + " " + width + " " + height)
        // .attr("width", width)
        // .attr("height", height);
        

    let projection = d3.geoEquirectangular()
        // .fitExtent([margin, margin, [width - margin, height - margin]], features)
        // .translate([width, height])
        // .scale(100);

    let path = d3.geoPath().projection(projection);

    svg.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'ice-coords')
        .attr("fill", "#7FFFD4")

    
}



// 1. access a set of coordinates