let images = [
    "image0",
    "image0",
    "image1",
    "image1",
    "image2",
    "image2",
    "image3",
    "image3",
    "image4",
    "image4",
    "image5",
    "image5",
];
let openCards = [];

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

let shuffleCards = images.sort(() =>
    (Math.random() > 0.5 ? 2 : -1))

    for (let i = 0; i < images.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.classList.add(shuffleCards[i]);
        document.querySelector(".game").appendChild(box);
        box.onclick = handleClick;
    }
    

function checkMatch() {
    if (openCards[0].className === openCards[1].className) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === images.length) {
        alert("Você venceu!")
    }
}