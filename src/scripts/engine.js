let images = [
   "0", "0", "1", "1", "2", "2", "3", "3", "4", "4", "5", "5"
];
let openCards = [];

let shuffleCards = images.sort(() =>
    (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < images.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleCards[i];
    document.querySelector(".game").appendChild(box)
}