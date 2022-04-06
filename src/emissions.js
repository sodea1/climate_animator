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

export const initializeFog = () => {
    canvasEl = document.getElementById("dots");
    canvasEl.width = 1000;
    canvasEl.height = 700;
    ctx = canvasEl.getContext('2d');


    const ton = tonnes();
    const startNum = (ton[1].emissions / 1000);

    // ctx.arc(x, y, r, 0, 2 * Math.PI)
    // for(let i = 0; i < startNum; i++)

    width = canvasEl.width;
    height = canvasEl.height;

    for(let i = 0; i < startNum; i++) {
        let x = Math.random() * (width - 1);
        let y = Math.random() * (height); 

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 1, y);
        ctx.stroke();
    }
    
}

export const addFog = () => {
    let data = tonnes();
    
    for(let i = 2; i < data.length; i++) { // set to two because first two numbers are same
        let prev = data[i - 1]
    }
}

export const oneFogCycle = () => {
    const data = tonnes();

}


    // Add One Particle
    export const oneParticle = () => {
        console.log(ctx);

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


        // let clearID = setInterval(() => {
        //     for (let i = 1; i < data.length; i++) {
        //         if (i === data.length) {
        //             clearInterval(clearID);
        //             return;
        //         }

        //         let nextNum = data[i].emissions / 1000;
        //         initializeFog(nextNum);
        //     }
        // }, 2);