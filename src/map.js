import { iceCapArea } from "./data";

export const iceMap2015 = require("../ice_ext_201509.json");
export const iceMap2003 = require("../ice_ext_200309.json");
export const iceMap1990 = require("../ice_ext_199009.json");
export const iceMap1980 = require("../ice_ext_198009.json");

export function animate() {
    let playButton = document.querySelector("#animation");

    playButton.addEventListener("click", () => {
        renderRepeat();
    }, 250);
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
        i++;
        if (i > maps.length) {
            renderMap(iceMap1980);
        }
    }, 1000);
};

const surfaceArea = (map) => {
    let years = [
        [iceMap1980, 1990],
        [iceMap1990, 1980],
        [iceMap2003, 2003],
        [iceMap2015, 2015]
    ];

    let year = 0;
    for(let i = 0; i < years.length; i++) {
        if (years[i][0] === map) {
            year = years[i][1];
        } 
    }
    let area = iceCapArea(year);
    return area;
};

export function renderMap(map) {
    let features = map.features;
    let area = (surfaceArea(map)*1000).toString();

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

    let g = svg.append("g")
        .attr("class", "hover-area")
        
        

    g.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr("data-area", area)
        .attr("fill", "#99FFFF")
        .on("mouseover", function(d) {
            d3.select(this).
        });
        

    
}
