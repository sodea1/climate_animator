import { iceCapArea } from "./data";

export const iceMap2015 = require("../data/ice_ext_201509.json");
export const iceMap2003 = require("../data/ice_ext_200309.json");
export const iceMap1990 = require("../data/ice_ext_199009.json");
export const iceMap1980 = require("../data/ice_ext_198009.json");

export const years = [
    [iceMap1980, 1980],
    [iceMap1990, 1990],
    [iceMap2003, 2003],
    [iceMap2015, 2015]
];

export function animate() {
    let playButton = document.querySelector("#animation");

    playButton.addEventListener("click", () => {
        years.forEach((yr) => {
            document.getElementById(yr[1]).classList.remove("hidden-button");
        });
        
        renderRepeat();
    });
}

const renderRepeat = () => {
    const maps = [
        iceMap1980,
        iceMap1990,
        iceMap2003,
        iceMap2015
    ];
    
    let i = 0;
    let clearID = setInterval(() => {
        if (i === maps.length) {
            clearInterval(clearID);
            return;
        }
        document.querySelector("#map-box").remove();
        renderMap(maps[i]);
        i++;
    }, 750);
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

function removeColor(year) {
    years.forEach((yr) => {
        if (yr[1] === year) {
            document.getElementById(yr[1]).classList.add("hidden-button");
        } else {
            document.getElementById(yr[1]).classList.remove("hidden-button");
        }
    });
}

export function renderMap(map) {
    let features = map.features;
    let area = (Math.round(surfaceArea(map) * 1000)).toLocaleString();
    let year = mapYear(map);

    removeColor(year);

    let width = 1000;
    let height = 700;
    
    let svg = d3.select(".map-here")
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
        .attr("fill", "#40E0D0");
    
    d3.select("#map-area")
        .text(area + " " + "sq. miles (thousands)");
     
    d3.select("#map-year")
        .text("September" + " - " + year);
}
