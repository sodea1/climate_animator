import { buildFramework, renderMap, iceMap1979, testMap, multiRender, calcArea, intervalDisplay, maps } from "./map";

document.addEventListener("DOMContentLoaded", () => {
  // buildFramework();s
  // renderMap(maps[0]);
  renderMap(iceMap1979);
  setTimeout(function () {
    document.querySelector("#map").remove();
  }, 5000);
  // setInterval(renderMap, 2000, iceMap1979);
});




