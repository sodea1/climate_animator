import { tonnes } from "./data";

export const emissionsGraph = () => {
  let data = tonnes();
  let width = 800; // need to fix sizing 
  let height = 400;

  let svg = d3.select("#line-graph")
    .append("svg")
    .attr("width", 500)
    .attr("height", height);


  function createGraph(data) {
    let xAxis = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([0, width]);

    let g = svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xAxis));

    let yAxis = d3.scaleLinear()
      .domain([d3.min(data, function(d) { return d.emissions; }), d3.max(data, function(d) { return d.emissions; })]);

  }

  createGraph(data);

};


/// NEED AN ARRAY OF TONNES