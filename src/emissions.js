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
    document.getElementById("animate-emissions").innerHTML = " START";
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
    let play = document.getElementById("animate-emissions");
    debugger
    play.addEventListener("click", (e) => {
        debugger
        if (e.target.innerHTML === " START") {
            let year = document.getElementById("emissions-year").innerHTML;
            let startIdx = parseInt(year) - parseInt(firstYr);
            play.innerHTML = " PAUSE";
            beginLoop(startIdx);
        } else if (e.target.innerHTML === " PAUSE") {
            play.innerHTML = " START";
        }
    })
}

// async function iterating through each amt difference yr to yr
const beginLoop = async (startIdx) => {
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

    for (let num = startIdx; num < differences.length; num++) {
        generateBubbles(differences[num], yrsArr[num]);
        await sleep(10, yrsArr[num]);

        if (num === differences.length - 1) {
            createCanvas();
            reset();
        }
    }
};

const sleep = (ms, yr) => {
    let play = document.getElementById("animate-emissions");
    let startYr = parseInt(firstYr) + 1;

    if (play.innerHTML === " PAUSE" || yr === startYr) {
        return new Promise(resolve => setTimeout(resolve, ms));
    } else { // MUST INCLUDE DOUBLE CONDITIONAL OTHERIWSE RESTART BUGS AFTER HITTING PAUSE ONCE
        return new Promise(resolve => setTimeout(resolve, ms * 10000000))
    }
};

const reset = () => {
    document.getElementById("emissions-year").innerHTML = firstYr;
    let play = document.getElementById("animate-emissions");

    if (play.innerHTML === " START") {
        let year = document.getElementById("emissions-year").innerHTML;
        let startIdx = parseInt(year) - parseInt(firstYr);
        play.innerHTML = " PAUSE";
        beginLoop(startIdx);
    } else if (play.innerHTML === " PAUSE") {
        play.innerHTML = " START";
    }
}