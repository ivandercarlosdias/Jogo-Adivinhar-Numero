'use strict';

// Define até qual N° vai o jogo
const numMax = 20;
let score = numMax;
let highscore = 0;

// Define o N° aleatório secreto
let secretNumber = Math.trunc(Math.random() * numMax + 1);

// Define os valores no DOM
document.querySelector(".score").textContent = score;
document.querySelector(".between").textContent = `(Escolha um n° entre 1 e ${numMax})`;

const newGame = function() {
    let score = numMax;
    let secretNumber = Math.trunc(Math.random() * numMax + 1);
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Tente acertar qual o número!";
}

// Verifica número
const checkNumber = function() {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess || guess > numMax) {
        document.querySelector(".message").textContent = "Número inválido!";
    } else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".message").textContent = "🎉 Parabéns! Número exato!";
        document.querySelector("body").classList.add("success");
    } else {
        if (score > 1) {
            document.querySelector(".message").textContent = `${guess > secretNumber ? "📈 Muito alto!" : "📉 Muito baixo!"}`;
            document.querySelector(".guess").value = "";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥 Você perdeu o jogo!";
            document.querySelector("body").classList.add("error");
        }
    }
}

// Ao clicar no botão "New Game" chama a função newGame()
document.querySelector(".new").addEventListener("click", newGame);

// Ao clicar no botão "Check" chama a função checkNumber()
document.querySelector(".check").addEventListener("click", checkNumber);