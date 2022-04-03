// const iceExtData = require('../data/masie_ice_r00_v01_2022091_4km.json');
// const topo = require('masie_ice_topo.json');

//innerHeight/Width of window return pixel width/height
// document.DocumentElement returns Element which is root of document aka <html> tag
let width = Math.max(document.documentElement.clientWidth, window.innerWidth);
let height = Math.max(document.documentElement.clientHeight, window.innerHeight);

let svg = d3.select("body").append("svg");


// viewBox = define position & dimension(min-x, min-y, width, height)
// preserveAspectRatio provides scaling to reconcile aspect ratio differences of viewBox and viewPort
svg.attr("viewBox", "50 50" + width + " " + height)
    .attr("preserveAspectRatio", "xMinyMin");

let map = svg.append("g")
    .attr("class", "ice-map");

// async queue to fetch the json map data, execute renderMap function upon completion
d3.queue()
    .defer(d3.json, "../data/masie_ice_topo.json")
    
