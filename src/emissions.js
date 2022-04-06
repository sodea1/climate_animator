import { tonnes } from "./data";

var canvasEl;
var ctx;
var width;
var height;
var radius = 2;

export const initializeFog = () => {

    // CREATE CANVAS

    canvasEl = document.getElementById("dots");
    canvasEl.width = 800;
    canvasEl.height = 600;
    ctx = canvasEl.getContext('2d');

    // DEFINE KEY VARIABLES

    const ton = tonnes(); // array of hashes
        let firstYr = ton[0].year;
        let lastYr = parseInt(ton[ton.length - 1].year) + 1;
    const years = d3.range(firstYr, lastYr);

    const sequentialTonnes = [];
        ton.forEach((hash) => {
            sequentialTonnes.push(hash["tonnes"] / 1000000);
        });

    width = canvasEl.width;
    height = canvasEl.height;
    
    // RENDER FIRST YEAR'S TONNES IN CIRCLES
    const startTonnes = (ton[0].tonnes / 1000000); // 1 million tons per red bubble

    for(let i = 0; i < startTonnes; i++) {
        let x = Math.random() * (width - 1);
        let y = Math.random() * (height); 

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();
    }

    document.querySelector("#emissions-year").innerHTML = firstYr;

    // ADD EVENT LISTENER
    let play = document.querySelector("#animate-emissions");
    play.addEventListener("click", () => {

        let differences = [];
        let yrsArr = [];

        for (let j = 1; j < sequentialTonnes.length; j++) {
            let amtBubbles = sequentialTonnes[j] - sequentialTonnes[j - 1];
            let nextYr;
            if (j === sequentialTonnes.length - 1) nextYr = 2020;
            nextYr = parseInt(years[j]);
            yrsArr.push(nextYr);
            differences.push(amtBubbles);
        }

        // Bubble Generator
        function bubbleGenerator(diff, yr) {
            document.querySelector("#emissions-year").innerHTML = yr;
            for (let i = 0; i < diff; i++) {
                let x = Math.random() * (width - 1);
                let y = Math.random() * (height);

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fillStyle = "#BEBEBE";
                ctx.fill();
            }
        }

        // promise to be resolved (must resolve a setTimeout of X ms time - function as a pause)
        const sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };

        const beginLoop = async () => {
            for(let num = 0; num < differences.length; num++) {
                bubbleGenerator(differences[num], yrsArr[num]);
                await sleep(75);
            }
            document.querySelector("#emissions-year").innerHTML = yr;
        };

        beginLoop();
    });
};
