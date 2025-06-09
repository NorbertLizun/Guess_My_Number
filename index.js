'use strict'

const numberElement = document.querySelector(".number");
const messageElement = document.querySelector(".message");
const bodyElement = document.querySelector("body");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");

let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

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
    messageElement.textContent = "⛔ No number!"
}

const handleGoodGuess = function () {
    numberElement.textContent = secretNumber;
    messageElement.textContent = "🥳 Correct number!"
    bodyElement.style.backgroundColor = "#60b347";
    numberElement.style.width = "30rem";
    handleHighscore();
}

const handleHighscore = function () {
    if (score > highscore) {
        highscore = score;
        highscoreElement.textContent = highscore;
    }
}

const handleWrongGuess = function (message) {
    if (score > 1) {
        score--;
        scoreElement.textContent = score;
        messageElement.textContent = message
    } else {
        bodyElement.style.backgroundColor = "#e34234";
        scoreElement.textContent = 0;
        messageElement.textContent = "😵 You lost the game!"
    }
}

function resetGame() {
    score = 20;
    secretNumber = generateRandomNumber();
    scoreElement.textContent = score;
    numberElement.textContent = "?";
    messageElement.textContent = "Start guessing..."
    bodyElement.style.backgroundColor = "#222";
    numberElement.style.width = "15rem";
    document.querySelector(".guess").value = "";
}

function generateRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}