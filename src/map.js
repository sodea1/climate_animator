const iceMap1979 = require("../ice_ext_197909.json");
const iceMap2016 = require("../ice_ext_201609.json");

export const maps = [iceMap1979, iceMap2016];

export function multiRender(func) {
    let maps = 

    maps.forEach((map, index) => {
        func(map);
        if (index !== maps.length - 1) {
            d3.select("svg").remove();
        }
    });
}

export function renderMap(map) {
    let features = map.features;

    let width = 1000;
    let height = 500;
    
    let svg = d3.select("body")
        .append("svg")
        .attr("viewBox", "0 0" + " " + (width) + " " + height);
        // .attr("width", width)
        // .attr("height", height);
        

    let projection = d3.geoAzimuthalEqualArea()
        .fitSize([width / 2.5, height], {type: "FeatureCollection", features: features})
        .center([-10, -100])
        .rotate([0, -90]);
        // .translate(100, 100);
    

    let path = d3.geoPath().projection(projection);

    svg.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr("id", 'path-id')
        .attr('d', path)
        .attr('class', 'ice-coords')
        .attr("fill", "blue");

}
