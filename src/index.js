import { buttonMaker } from "./buttons";
import { createCanvas, renderButton } from "./emissions";
import { renderMap, iceMap1980, animate } from "./map";
import { instructions } from "./modal";

document.addEventListener("DOMContentLoaded", () => {
  const instructionsBtn = document.getElementsByClassName("instructions-link");

  instructionsBtn[0].addEventListener("click", () => {
    document.getElementsByClassName("modal")[0].classList.remove("hide");
  })

  const yearForm = document.getElementsByClassName("dropdown");
  yearForm[0].addEventListener("change", (e) => {
    document.getElementsByClassName("input-year")[0].value = e.target.value;
  })
  yearForm[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const canvas = document.getElementById("dots");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const year = document.getElementsByClassName("input-year")[0].value;
    if (parseInt(year) < 1750 || parseInt(year) > 2020 || year.length === 0) {
      return document.getElementsByClassName("errors")[0].innerHTML = "* Year must be between 1750 and 2020";
    }
    document.getElementsByClassName("errors")[0].innerHTML = "";
    createCanvas(year);
    document.getElementById("line").classList.add("hide");
    document.getElementsByClassName("reset-link")[0].classList.remove("hide");
  })
  
  renderMap(iceMap1980);
  animate();
  buttonMaker();
  
  instructions();
  createCanvas();
  renderButton();
});
