const btnShare = document.querySelector(".share");
const popup = document.querySelector(".popup");
const container = document.querySelector(".container");

btnShare.addEventListener("click", () => {
    if (popup.style.display == "" || popup.style.display == "none") {
        popup.style.display = "flex";
        btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
        btnShare.style.backgroundBlendMode = "screen";
    } else {
        popup.style.display = "none";
        btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";
        btnShare.style.backgroundBlendMode = "normal";
    }
})

btnShare.addEventListener("mouseover", () => {
    if (popup.style.display == "" || popup.style.display == "none") {
        btnShare.style.backgroundColor = "hsl(214, 17%, 51%)";
        btnShare.style.backgroundBlendMode = "screen";
    }
})

btnShare.addEventListener("mouseout", () => {
    if (popup.style.display == "" || popup.style.display == "none") {
        btnShare.style.backgroundColor = "hsl(210, 46%, 95%)";
        btnShare.style.backgroundBlendMode = "normal";
    }
})