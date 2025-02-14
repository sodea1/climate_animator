import { renderMap, years } from "./map";


export const buttonMaker = () => {
    let yrs = ["1980", "1990", "2003", "2015"];
    for(let i = 0; i < yrs.length; i++) {
        let button = document.getElementById(yrs[i]);

        button.addEventListener("click", () => {
            button.classList.add('hidden-button');
            let currentMapYear = document.getElementsByClassName("map-year");
            let map;

            years.forEach((el) => {
                if (el[1].toString() === yrs[i]) { // yrs[i] = current year
                    map = el[0];
                }
            });

            if (currentMapYear === yrs[i]) {
                return;
            } else {
                // remove hidden-button class from all buttons except one selected
                for (let j = 0; j < yrs.length; j++) {
                    if (yrs[i] !== yrs[j]) {
                        document.getElementById(yrs[j]).classList.remove("hidden-button");
                    }
                }
                document.querySelector("#map-box").remove();
                renderMap(map);
            }

        });
    }
};

// yrs[i] year clicked (add hidden-button AKA do nothing)

