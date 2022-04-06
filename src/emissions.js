import { tonnes } from "./data";


// export class EmissionsFog {
//     constructor() {
//         // this.date = tonnes();
//         this.createFog();
//     }

var canvasEl;
var ctx;
var width;
var height;
var radius = 3;

export const initializeFog = () => {

    // CREATE CANVAS

    canvasEl = document.getElementById("dots");
    canvasEl.width = 800;
    canvasEl.height = 800;
    ctx = canvasEl.getContext('2d');

    // DEFINE KEY VARIABLES

    const ton = tonnes(); // array of hashes
    let firstYr = ton[0].year;
    let lastYr = ton[ton.length - 1].year;
    const years = d3.range(firstYr, lastYr);

    const sequentialTonnes = [];
    ton.forEach((hash) => {
        sequentialTonnes.push(hash["tonnes"] / 1000000);
    })

    const startTonnes = (ton[0].tonnes / 1000000); // 1 million tons per red bubble

    width = canvasEl.width;
    height = canvasEl.height;

    // RENDER FIRST YEAR'S TONNES IN CIRCLES

    for(let i = 0; i < startTonnes; i++) {
        let x = Math.random() * (width - 1);
        let y = Math.random() * (height); 

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();
    }

    // ADD EVENT LISTENER

    let play = document.querySelector("#animate-emissions");
    play.addEventListener("click", () => {

        function addBubbles(diff) {
            for (let i = 0; i < diff; i++) {
                setTimeout(() => {
                    let x = Math.random() * (width - 1);
                    let y = Math.random() * (height);


                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "#BEBEBE";
                    ctx.fill();
                })
            }
        }
        
        for(let j = 1; j < sequentialTonnes.length; j++) {
            let amtBubbles = sequentialTonnes[j] - sequentialTonnes[j - 1];
            addBubbles(amtBubbles);
        }
        
    })
}