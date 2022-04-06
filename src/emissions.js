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
var radius = 2;

export const initializeFog = () => {

    // CREATE FIRST FOG MAP

    canvasEl = document.getElementById("dots");
    canvasEl.width = 1000;
    canvasEl.height = 800;
    ctx = canvasEl.getContext('2d');


    const ton = tonnes();
    const startNum = (ton[0].emissions / 1000000);
    console.log(startNum);

    // console.log((34807 259 099 - 9350528));


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

        let endNum = ton[ton.length - 1].emissions / 10000;
        let diff = endNum - startNum;
        let largeBubbleDiff = diff / 1000;

        
        for (let i = 0; i < largeBubbleDiff; i++) {
            setTimeout(() => {
                let x = Math.random() * (width - 1);
                let y = Math.random() * (height);
                // }

                ctx.beginPath();
                ctx.arc(x, y, radius * 4, 0, 2 * Math.PI);
                ctx.stroke();
            })
            
        }

        
        // for (let i = 1; i < ton.length; i++) { 
        //     let diff = (ton[i].emissions / 1000) - (ton[i - 1].emissions / 1000);

        //     if (diff < 1) continue;

        //     for (let i = 0; i < diff; i++) {
        //         addOne();
        //     }
            // for (let count = 0; count < diff; count++) {
            //     setTimeout(() => {
            //         addOne();
            //     }, 5);
            // }
        // }
    })
    
}

export const addFog = () => {
    let data = tonnes();
    
    for(let i = 2; i < data.length; i++) { // set to two because first two numbers are same
        let prev = data[i - 1];
        let nextNum = data[i].emissions / 1000;
        let diff = nextNum - prev;
        
        if (diff < 1) continue;

        for(let count = 0; count < diff; count++) {
            oneParticle();
        }
    }
}

export const oneFogCycle = () => {
    const data = tonnes();

}


    // Add One Particle
    export const oneParticle = () => {
        // console.log(ctx);

        canvasEl = document.getElementById("dots");
        canvasEl.width = 1000;
        canvasEl.height = 700;
        ctx = canvasEl.getContext('2d');

        initializeFog();
        // const ton = tonnes();
        // const startNum = (ton[1].emissions / 1000);

        // for (let i = 0; i < startNum; i++) {
            let x = Math.random() * (width - 1);
            let y = Math.random() * (height);

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + 1, y);
            ctx.stroke();
        // }
    }