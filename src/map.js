import { iceCapArea } from "./data";

export const iceMap2015 = require("../ice_ext_201509.json");
export const iceMap2003 = require("../ice_ext_200309.json");
export const iceMap1990 = require("../ice_ext_199009.json");
export const iceMap1980 = require("../ice_ext_198009.json");

// class Map() {
    
// }

export const years = [
    [iceMap1980, 1980],
    [iceMap1990, 1990],
    [iceMap2003, 2003],
    [iceMap2015, 2015]
];

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

    let clearID = setInterval(() => {
        if (i === maps.length) {
            clearInterval(clearID);
            return;
        }

        if (document.querySelector("div.map-area").innerHTML.includes("1,")) i = 0;

        document.querySelector("#map-box").remove();
        renderMap(maps[i]);
        i++;
    }, 1000);
};

const surfaceArea = (map) => {
    let years = [
        [iceMap1980, 1980],
        [iceMap1990, 1990],
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

const mapYear = (map) => {
    let years = [
        [iceMap1980, 1980],
        [iceMap1990, 1990],
        [iceMap2003, 2003],
        [iceMap2015, 2015]
    ];

    for(let i = 0; i < years.length; i++) {
        if (years[i][0] === map) {
            return years[i][1];
        }
    }
};

export function renderMap(map) {
    let features = map.features;
    let area = (Math.round(surfaceArea(map) * 1000)).toLocaleString();
    let year = mapYear(map).toString();

    let width = 850;
    let height = 500;
    
    let svg = d3.select("div.map-here")
        .append("svg")
        .attr("viewBox", "-85 -50" + " " + width + " " + height)
        .attr("id", "map-box");
        
    let projection = d3.geoAzimuthalEqualArea()
        .fitSize([width / 1.5, height], {type: "FeatureCollection", features: features})
        .center([0, -100])
        .rotate([0, -90]);

    let path = d3.geoPath().projection(projection);

    let g = svg.append("g")
        .attr("id", "map");
        
    g.selectAll("path")
        .data(features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr("data-area", area)
        .attr("fill", "#99FFFF");
    
    d3.select("div.map-area")
        .text("Surface Area:" + " " + area + " " + "sq. miles (thousands)");
     
    d3.select("div.map-year")
        .text(year)
}
