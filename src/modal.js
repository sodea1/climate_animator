
export const instructions = () => {
    let continueBtn = document.getElementsByClassName("continue");

    continueBtn[0].addEventListener("click", () => {
        let modal = document.getElementsByClassName("modal");
        modal[0].classList.add("hide");
    });

    let modalCtn = document.getElementsByClassName("modal");
    modalCtn[0].addEventListener("click", (e) => {
        if (e.target.classList[0].includes("modal")) {
            modalCtn[0].classList.add("hide");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modalCtn[0].classList.add("hide");
        }
    })
}