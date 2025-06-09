'use strict'

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

console.log(secretNumber)

document.querySelector(".check").addEventListener("click", handleGuessNumber)
document.querySelector(".again").addEventListener("click", resetGame)

function handleGuessNumber() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        handleEmptyGuess();
    } else if (guess === secretNumber) {
        handleGoodGuess();
    } else {
        handleWrongGuess(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
    }
}

const handleEmptyGuess = function () {
    document.querySelector(".message").textContent = "⛔ No number!"
}

const handleGoodGuess = function () {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🥳 Correct number!"
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    handleHighscore();
}

const handleHighscore = function () {
    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
}

const handleWrongGuess = function (message) {
    if (score > 1) {
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = message
    } else {
        document.querySelector("body").style.backgroundColor = "#e34234";
        document.querySelector(".score").textContent = 0;
        document.querySelector(".message").textContent = "😵 You lost the game!"
    }
}

function resetGame() {
    score = 20;
    secretNumber = generateRandomNumber();
    console.log(secretNumber)
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
}

function generateRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}