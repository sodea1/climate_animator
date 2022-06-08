import { tonnes } from "./data";

var canvasEl;
var ctx;
var width;
var height;
var radius = 1;
var ton = tonnes();
var firstYr = ton[0].year;
var lastYr = parseInt(ton[ton.length - 1].year) + 1;

export const createCanvas = () => {
    canvasEl = document.getElementById("dots");
    canvasEl.width = 700;
    canvasEl.height = 480;
    ctx = canvasEl.getContext('2d');

    width = canvasEl.width;
    height = canvasEl.height;

    // RENDER FIRST YEAR'S TONNES IN CIRCLES
    const startTonnes = (ton[0].tonnes / 1000000); // 1 million tons per red bubble

    for (let i = 0; i < startTonnes; i++) {
        let x = Math.random() * (width - 1);
        let y = Math.random() * (height);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#BEBEBE";
        ctx.fill();
    }
}

const generateTonnesSeq = () => {
    const sequentialTonnes = [];
    ton.forEach((hash) => {
        sequentialTonnes.push(hash["tonnes"] / 1000000);
    });

    return sequentialTonnes;
}
 
// generates for single year difference
const generateBubbles = (diff, yr) => {
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

// adds event listener conditional for start/pause
export const renderButton = () => {
    document.getElementById("emissions-year").innerHTML = firstYr;
    debugger
    const play = document.getElementById("animate-emissions");
    play.addEventListener("click", (e) => {
        if (e.target.innerHTML === " START") {
            let year = document.getElementById("emissions-year").innerHTML;
            let startIdx = parseInt(year) - parseInt(firstYr);
            debugger
            beginLoop(startIdx);
            play.innerHTML = " PAUSE";
        } else if (e.target.innerHTML === " PAUSE") {
            debugger
            play.innerHTML = " START";
        }
    })
}

// async function iterating through each amt difference yr to yr
const beginLoop = async (startIdx) => {
    debugger
    const sequentialTonnes = generateTonnesSeq();
    const years = d3.range(firstYr, lastYr);
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
    debugger
    for (let num = startIdx; num < differences.length; num++) {
        generateBubbles(differences[num], yrsArr[num]);
        await sleep(50, yrsArr[num]);

        if (num === differences.length - 1) {
            createCanvas();
            renderButton();
        }
    }
};

const sleep = (ms, yr) => {
    let play = document.getElementById("animate-emissions");

    if (play.innerHTML === " PAUSE" || yr === parseInt(firstYr) + 1) {
        return new Promise(resolve => setTimeout(resolve, ms));
    } else {
        return new Promise(resolve => setTimeout(resolve, ms * 100))
    }
};

// export const initializeFog = () => {
//     createCanvas();

//     document.querySelector("#emissions-year").innerHTML = firstYr;
//     // ADD EVENT LISTENER
//     let playButton = document.querySelector("#animate-emissions");
//     const years = d3.range(firstYr, lastYr);
// };
