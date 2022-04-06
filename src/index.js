import { buttonMaker } from "./buttons";
import { tonnes } from "./data";
import { EmissionsFog, initializeFog, oneParticle } from "./emissions";
import { emissionsGraph } from "./emissions_graph";
import { renderMap, iceMap1980, animate } from "./map";


document.addEventListener("DOMContentLoaded", () => {
  renderMap(iceMap1980);
  animate();  
  buttonMaker();
  // initializeFog(tonnes());
  oneParticle();
});
