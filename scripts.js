'use strict';

(function() {
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
        score = numMax;
        secretNumber = Math.trunc(Math.random() * numMax + 1);
        document.querySelector(".score").textContent = score;
        document.querySelector(".guess").value = "";
        document.querySelector(".number").textContent = "?";
        displayMessage("Tente acertar qual o número!");
        document.querySelector("body").classList.remove("success", "error");
    }

    const displayMessage = function(message) {
        document.querySelector(".message").textContent = message;
    }

    const checkNumber = function() {
        let guess = Number(document.querySelector(".guess").value);
        // verifica se é um numero válido
        if (!guess || guess > numMax) {
            displayMessage("⛔️ Número inválido!");
        // jogador ACERTOU o numero
        } else if (guess === secretNumber) {
            document.querySelector(".number").textContent = secretNumber;
            displayMessage("🎉 Parabéns! Número exato!");
            document.querySelector("body").classList.add("success");
            // atualiza se necessario o highscore
            if (score > highscore)  {
                highscore = score;
                document.querySelector(".highscore").textContent = highscore;
            }
        // jogador ERROU o numero
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "📈 Muito alto!" : "📉 Muito baixo!");
                score--;
                document.querySelector(".score").textContent = score;
            } else {
                displayMessage("💥 Você perdeu o jogo!");
                document.querySelector("body").classList.add("error");
            }
        }
    }

    // Ao clicar no botão "New Game" chama a função newGame()
    document.querySelector(".new").addEventListener("click", newGame);

    // Ao clicar no botão "Check" chama a função checkNumber()
    document.querySelector(".check").addEventListener("click", checkNumber);
})();