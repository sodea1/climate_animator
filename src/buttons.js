import { renderMap, years } from "./map";


export const buttonMaker = () => {
    let yrs = ["1980", "1990", "2003", "2015"];
    for(let i = 0; i < yrs.length; i++) {
        document.getElementById(yrs[i]).addEventListener("click", () => {
            let currentMapYear = document.getElementsByClassName("map-year");
            let map;
            years.forEach((el) => {
                if (el[1].toString() === yrs[i]) {
                    map = el[0];
                }
            })
            if (currentMapYear === yrs[i]) {
                return;
            } else {
                document.querySelector("#map-box").remove();
                renderMap(map);
            }

        });
    }
    
    
};
