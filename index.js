'use strict'

const number = document.querySelector(".number");
const message = document.querySelector(".message");
const body = document.querySelector("body");
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
    message.textContent = "⛔ No number!"
}

const handleGoodGuess = function () {
    number.textContent = secretNumber;
    message.textContent = "🥳 Correct number!"
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
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
        message.textContent = message
    } else {
        body.style.backgroundColor = "#e34234";
        scoreElement.textContent = 0;
        message.textContent = "😵 You lost the game!"
    }
}

function resetGame() {
    score = 20;
    secretNumber = generateRandomNumber();
    scoreElement.textContent = score;
    number.textContent = "?";
    message.textContent = "Start guessing..."
    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
    document.querySelector(".guess").value = "";
}

function generateRandomNumber() {
    return Math.trunc(Math.random() * 20) + 1;
}