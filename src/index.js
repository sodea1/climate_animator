document.addEventListener("DOMContentLoaded", () => {
  d3.json("iceExtent.json", function (error, iceExtent) {

    if (error) return console.error(error);
    console.log(iceExtent);
  })  
});

