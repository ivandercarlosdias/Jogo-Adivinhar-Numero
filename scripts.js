'use strict';

// Definindo um número aleátório até 50
const number = Math.trunc(Math.random() * 50 + 1);
console.log(number);

// Verifica número
const checkNumber = function() {
    let guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        console.log("Número inválido!");
    } else {
        console.log(guess);
        document.querySelector(".guess").value = "";
    }
}

// Ao clicar no botão "Check" ele chama a função verificar o número
document.querySelector(".check").addEventListener("click", checkNumber);