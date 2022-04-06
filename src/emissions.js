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

    // CREATE FIRST FOG MAP

    canvasEl = document.getElementById("dots");
    canvasEl.width = 1000;
    canvasEl.height = 800;
    ctx = canvasEl.getContext('2d');


    const ton = tonnes(); // array of hashes
    let firstYr = ton[0].year;
    let lastYr = ton[ton.length - 1].year;
    const years = d3.range(firstYr, lastYr);
    const sequentialTonnes = [];

    // ton.forEach((hash) => {
    //     sequentialTonnes.push(hash[tonnes]);
    // })

    console.log(sequentialTonnes)

    const startNum = (ton[0].tonnes / 1000000); // 1 million tons per red bubble

    width = canvasEl.width;
    height = canvasEl.height;

    for(let i = 0; i < startNum; i++) {
        let x = Math.random() * (width - 1);
        let y = Math.random() * (height); 

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();

    }

    // ADD EVENT LISTENER

    let play = document.querySelector("#animate-emissions");
    play.addEventListener("click", () => {

        let endNum = ton[ton.length - 1].tonnes / 10000;
        let diff = endNum - startNum;
        let largeBubbleDiff = diff / 1000;

        function goTime(diff) {
            for (let i = 0; i < diff; i++) {
                setTimeout(() => {
                    let x = Math.random() * (width - 1);
                    let y = Math.random() * (height);


                    ctx.beginPath();
                    ctx.arc(x, y, radius * 4, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fillStyle = "red";
                    ctx.fill();
                })
            }
        }
        goTime(largeBubbleDiff);
        for(let j = 0; j < 4; j++) {

        }
        
    })
}