export const iceMap2015 = require("../ice_ext_201509.json");
export const iceMap2003 = require("../ice_ext_200309.json");
export const iceMap1990 = require("../ice_ext_199009.json");
export const iceMap1980 = require("../ice_ext_198009.json");

export function animate() {
    let playButton = document.querySelector("#animation");

    playButton.addEventListener("click", () => {
        renderRepeat();
    }, 1000);
}

const renderRepeat = () => {
    const maps = [
        iceMap1980, 
        iceMap1990, 
        iceMap2003, 
        iceMap2015
    ];
    
    let i = 1;
    setInterval(() => {
        document.querySelector("#map").remove();
        renderMap(maps[i]);
        i++
        if (i > maps.length) {
            i = 0;
        }
    }, 1000);
   
};

export function renderMap(map) {
    let features = map.features;

    let width = 1000;
    let height = 500;
    
    let svg = d3.select("body")
        .append("svg")
        .attr("id", "map")
        .attr("viewBox", "0 0" + " " + (width) + " " + height);
        

    let projection = d3.geoAzimuthalEqualArea()
        .fitSize([width / 2.5, height], {type: "FeatureCollection", features: features})
        .center([-10, -100])
        .rotate([0, -90]);
    

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
