import { tonnes } from "./data";

const parseDate = d3.timeParse("%Y");

export const emissionsGraph = () => {
  let data = tonnes();
  let width = 500; // need to fix sizing 
  let height = 400;

  // add svg
  let svg = d3.select("#line-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // axis
    let xAxis = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([0, width]);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xAxis));
  
    let yAxis = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.tonne * 1000})); // tonnes in (000)


  // let yAxis = d3.scaleLinear()
  //   .domain([d3.min(data, function(d) { return d.emissions; }), d3.max(data, function(d) { return d.emissions; })]);

};


/// NEED AN ARRAY OF TONNES