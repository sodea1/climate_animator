import { schemeBrBG } from "d3";

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
    let features = iceMapData['features'];
    console.log(features);

    let width = 800;
    let height = 700;
    let margin = 50
    
    let svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    let projection = d3.geoMercator()
        // .fitExtent([margin, margin, [width - margin, height - margin]], features)
        // // .translate([width, height])
        // // .scale(100);

    let path = d3.geoPath().projection(projection);
    
    // d3.json("../masie_ice_r00_v01_2022091_4km.json")
    //     .then(function(data) {
            
    //         svg.append("path")
    //             .attr("d", path(data));
    //     }
    // ) 
    // projection.fitSize([width, height], features)

    svg.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'ice-coords')
        .attr("stroke", 'red')
    
}



// 1. access a set of coordinates