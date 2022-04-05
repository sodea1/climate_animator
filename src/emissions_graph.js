import { tonnes } from "./data";


export const emissionsGraph = () => {
  let data = tonnes();
  let width = 400;
  let height = 700;

  let svg = d3.select("#line-graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("g");
};


/// NEED AN ARRAY OF TONNES