


let buttons = document.getElementsByClassName("map-button");

buttons.forEach((butt) => {
    butt.addEventListener("click", () => {
        renderMap()
    })
})