import { tonnes } from "./data";

var canvasEl;
var ctx;
var width;
var height;
var radius = 1;
var ton = tonnes();
var firstYr = ton[0].year;
var lastYr = parseInt(ton[ton.length - 1].year);

export const yearTonnes = (year) => {
    return stringify(parseInt(ton[parseInt(year) - firstYr].tonnes));
}

const stringify = (num) => {
    let str = "";
    let count = 0;
    let arr = num.toString().split("");

    for (let i = arr.length - 1; i > -1; i--) { // 12,456
        
        if (count === 3) {
            str = "," + str;
            str = arr[i] + str;
            count = 0;
        } else {
            str = arr[i] + str;
        }
        count += 1;
    }

    return str;
}

const singleYearCtx = (year, ctx, width, height) => {
    const startTonnes = (ton[year - firstYr].tonnes / 1000000); // 1 million tons per red bubble

    for (let i = 0; i < startTonnes; i++) {
        let x = Math.random() * (width);

        let y = Math.random() * height;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#fe6f5e";
        ctx.fill();
    }
}

export const createCanvas = (year) => {
    document.getElementsByClassName("dropdown")
    document.getElementById("animate-emissions").innerHTML = "PLAY";
    document.getElementById("emissions-year").innerHTML = firstYr;
    
    canvasEl = document.getElementById("dots");
    canvasEl.width = 650;
    canvasEl.height = 480;
    ctx = canvasEl.getContext('2d');
    
    width = canvasEl.width;
    height = canvasEl.height;
    
    const line = document.getElementById("line");
    line.style.top = '99%';
    const liveTonnes = document.getElementById("live-tonnes");
    const percentTotal = document.getElementById("percent-total");
    // liveTonnes.style.top = '99%';
    liveTonnes.innerHTML = stringify(ton[0].tonnes) + " total tonnes";
    percentTotal.innerHTML = "0%";
    
    if (year) {
        return singleYearCtx(year, ctx, width, height);
    } else {
        const startTonnes = (ton[0].tonnes / 1000000); // 1 million tons per red bubble
        for (let i = 0; i < startTonnes; i++) {
            let x = Math.random() * (width - 2);
            if (x < 5) {
                x += 5;
            }
            let y = height - 2;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#fe6f5e";
            ctx.fill();
        }
    }
}


const generateTonnesSeq = () => {
    const sequentialTonnes = [];
    ton.forEach((hash) => {
        sequentialTonnes.push(parseInt(hash["tonnes"]) / 1000000);
    });

    return sequentialTonnes;
}

const drawLine = (yr) => {
    const liveTonnes = document.getElementById("live-tonnes");
    const percentTotal = document.getElementById("percent-total");
    const line = document.getElementById("line");
    
    let cumArr = ton.slice(0, (yr - firstYr));
    
    let cumulativeTonnes = cumArr.reduce((acc, obj) => acc + parseInt(obj.tonnes), 0)
    const totalTonnes = Object.values(ton).reduce((sum, n) => parseInt(n.tonnes) + sum, 0);
    const percentTonnes = (cumulativeTonnes / totalTonnes);  // percentage of container filled based on year
    
    let ceiling = (1 - percentTonnes) * 100;

    if (ceiling < 0) {
        ceiling = 0;
    } else if (ceiling < 5) {
        document.getElementById("percent-max-fixed").classList.add("hide");
        document.getElementById("year-max-fixed").classList.add("hide");
    } else if (ceiling < 92) {
        const fixedYr = document.getElementById("emissions-year-fixed");
        const percentFixed = document.getElementById("percent-total-fixed");
        fixedYr.classList.remove("hide");
        percentFixed.classList.remove("hide");
    } 
    
    line.style.top = `${ceiling - 2}%`;
    // liveTonnes.innerHTML = `${stringify(minTonnes)}`; // NEED TO ACCUMULATE TONNES IN MIN TONNES
    liveTonnes.innerHTML = stringify(parseInt(cumulativeTonnes)) + " total tonnes";

    let adjust = yr === 2020 ? 2 : 0;
    percentTotal.innerHTML = `${Math.round(percentTonnes * 100 + adjust)}%`;

    if (yr === 2020) {
        const playBtn = document.getElementById("animate-emissions");
        playBtn.classList.add("disabled-button");
        playBtn.disabled = true;

        const resetBtn = document.getElementsByClassName("reset-link");
        resetBtn[0].style.display = "";
    }
}

const speedToggle = () => {
    const speedEles = document.getElementsByClassName("speed-toggle");
    const year = document.getElementById("emissions-year");
    const playPause = document.getElementById("animate-emissions");

    if (year.innerHTML === "1750" && playPause.innerHTML === "PLAY") {
        for (let i = 0; i < speedEles.length; i++) {
            speedEles[i].classList.add("hide");
        }
    } else if (playPause.innerHTML === "PLAY") {
        for (let i = 0; i < speedEles.length; i++) {
            speedEles[i].classList.add("hide");
        }
    } else if (playPause.innerHTML === "PAUSE") {
        for (let i = 0; i < speedEles.length; i++) {
            speedEles[i].classList.remove("hide");
        }
    }
}

const generateBubbles = (diff, yr) => {
    document.getElementById("emissions-year").innerHTML = yr;

    let cumArr = ton.slice(0, (yr - firstYr));
    let cumulativeTonnes = cumArr.reduce((acc, obj) => acc + parseInt(obj.tonnes), 0)
    const totalTonnes = Object.values(ton).reduce((sum, n) => parseInt(n.tonnes) + sum, 0);
    const percentTonnes = (cumulativeTonnes / totalTonnes); // percentage of container filled based on year
    const pixelHeight = height * percentTonnes;

    for (let i = 0; i < diff; i++) {
        let x = Math.random() * (width);
        if (x < 1) {
            x += 1;
        }

        let y = height - (Math.random() * (pixelHeight));
        if (y >= 479) {
            y -= 1;
        } else if (y <= 0) {
            y += 1;
        }
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#fe6f5e";
        ctx.fill();

    }    
}

// adds event listener conditional for start/pause
export const renderButton = () => {
    document.getElementById("emissions-year").innerHTML = firstYr;
    let play = document.getElementById("animate-emissions");
    let reset = document.getElementsByClassName("reset-link");

    play.addEventListener("click", (e) => {
        if (e.target.innerHTML === "PLAY") {
            speedToggle();
            let year = document.getElementById("emissions-year").innerHTML;
            let startIdx = parseInt(year) - parseInt(firstYr);
            play.innerHTML = "PAUSE";
            document.getElementsByClassName("reset-link")[0].style.display = "none";
            beginLoop(startIdx);
        } else if (e.target.innerHTML === "PAUSE") {
            speedToggle();
            play.innerHTML = "PLAY";
            document.getElementsByClassName("reset-link")[0].style.display = "";
        }
    });

    reset[0].addEventListener("click", () => {
        document.getElementById("emissions-year").innerHTML = firstYr;
        document.getElementById("emissions-year").innerHTML = firstYr;
        createCanvas();

        const yrTonnes = document.getElementById("year-tonnes");
        yrTonnes.innerHTML = '';

        const playBtn = document.getElementById("animate-emissions");
        playBtn.classList.remove("disabled-button");
        playBtn.disabled = false;

        document.getElementById("percent-max-fixed").classList.remove("hide");
        document.getElementById("year-max-fixed").classList.remove("hide");

        document.getElementsByClassName("reset-link")[0].style.display = "";
        document.getElementById("line").classList.remove("hide");
        const fixedYr = document.getElementById("emissions-year-fixed");
        const percentFixed = document.getElementById("percent-total-fixed");
        fixedYr.classList.add("hide");
        percentFixed.classList.add("hide");

        const speedEles = document.getElementsByClassName("speed-toggle");
        for (let i = 0; i < speedEles.length; i++) {
            speedEles[i].classList.remove("hide");
        }

        const inputYear = document.getElementsByClassName("input-year");
        inputYear[0].value = "";
    })
}

const getSpeed = () => {
    let speed = document.getElementsByClassName("speed");
    let value = parseInt(speed[0].value);
    let max = parseInt(speed[0].max);

    let adjusted;
    if (value > max / 2) {
        adjusted = max / 2 - (value - max / 2)
    } else if (value < max / 2) {
        adjusted = max / 2 + (max / 2 - value);
    }
    return adjusted;
}

// async function iterating through each amt difference yr to yr
const beginLoop = async (startIdx) => {
    const sequentialTonnes = generateTonnesSeq();
    const years = d3.range(firstYr, lastYr);
    let differences = [];
    let yrsArr = [];
    let speed = getSpeed();
    
    for (let j = 1; j < sequentialTonnes.length + 1; j++) {
        let amtBubbles = sequentialTonnes[j] - sequentialTonnes[j - 1];
        let nextYr;
        nextYr = parseInt(years[j - 1]);        
        yrsArr.push(nextYr);
        if (nextYr === 2019) {
            yrsArr.push(2020);
        }
        differences.push(amtBubbles);
    }
    
    for (let num = startIdx; num < differences.length; num++) {
        generateBubbles(differences[num], yrsArr[num]);
        drawLine(yrsArr[num]);
        await sleep(speed, yrsArr[num]);

        if (num === differences.length - 1) {
            document.getElementsByClassName("emissions-year").innerHTML = 2020;
            document.getElementsByClassName("reset-link")[0].classList.remove('hide')
        }
    }
};

const sleep = (ms, yr) => {
    let play = document.getElementById("animate-emissions");

    if (play.innerHTML === "PAUSE") {
        return new Promise(resolve => setTimeout(resolve, ms));
    } else {
        return new Promise(resolve => setTimeout(resolve, ms * 10000000))
    }
};