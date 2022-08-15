const words = ["kotlin", "java", "python", "script", "swift", 'golang', "delphi", 'scala', 'shell'];
const remaining = document.querySelector(".remaining");
const wrongLetter = document.querySelector(".wrong_letter");

let score = 6;
let usingSplit = null;
window.addEventListener("keyup", checkKey);
function checkKey(e) {
    const boxElm = document.querySelectorAll(".box");
    let checkWin = null
    if (usingSplit.includes(e.key)) {
        usingSplit.forEach((elems, index) => {
            if (elems === e.key) {
                boxElm[index].textContent = usingSplit[index];
            }
        });
        let playPauseMusic = Object.values(boxElm);
        checkWin = playPauseMusic.every(function (elems) {
            return elems.textContent != "";
        })
    } else {
        wrongLetter.textContent += `${e.key} , `;
        remaining.textContent = --score;
    }

    if (score === 0) {
        alert("lose");
        this.removeEventListener("keyup", checkKey);
    } else if (checkWin) {
        alert("Win");
        this.removeEventListener("keyup", checkKey);
    }
}

const wordsBox = document.querySelector(".guess_word_box");
function loadReas() {
    remaining.textContent = score;
    let random = Math.trunc(Math.random() * words.length);
    usingSplit = words[random].split('');
    usingSplit.forEach((elem, index) => {
        const createBoxElm = document.createElement("div");
        createBoxElm.className = "box";
        wordsBox.appendChild(createBoxElm);
    })
}
loadReas();

const btnRest = document.querySelector("button");
btnRest.addEventListener("click", function () {
    score = 6;
    wrongLetter.innerHTML = "";
    wordsBox.innerHTML = "";
    window.addEventListener("keyup", checkKey);
    loadReas();
})