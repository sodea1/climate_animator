export const iceMap1979 = require("../ice_ext_197909.json");
export const iceMap2016 = require("../ice_ext_201609.json");

export function calcArea() {
    let obj = iceMap1979.features[0].geometry;
    console.log(obj);
    console.log(d3.polygonArea(obj));
}

export function multiRender(func) {
    let maps = [iceMap1979, iceMap2016];
    maps.forEach((map) => {
        func(map);
    });
}

export function renderMap(map) {
    let features = map.features;

    let width = 900;
    let height = 500;
    
    let svg = d3.select("body")
        .append("svg")
        .attr("viewBox", "0 0" + " " + (width) + " " + height);
        // .attr("width", width)
        // .attr("height", height);
        

    let projection = d3.geoAzimuthalEqualArea()
        .fitSize([width / 3, height / 1.15], {type: "FeatureCollection", features: features})
        .center([-10, -100])
        .rotate([0, -90]);
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
        .attr("fill", "blue");

}

export function buildFramework() {

    /// practice
    d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    d3.select("svg")
        .append("path")

    let pixels = projection([1170000.0, 2216000.0]);
    console.log(pixels);

    let coords = [
        [100, 100],
        [200, 200],
        [400, 400],
        [500, 500]
    ];

    let lineGenerator = d3.line();

    let data = lineGenerator(coords);
    console.log(data)

    d3.select('path')
        .attr('d', data);

}