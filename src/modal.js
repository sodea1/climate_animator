
export const instructions = () => {
    let continueBtn = document.getElementsByClassName("continue");

    continueBtn[0].addEventListener("click", () => {
        let modal = document.getElementsByClassName("modal");
        modal[0].classList.add("hide");
    })
}