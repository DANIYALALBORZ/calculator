const numbers = document.querySelectorAll('[data-number]');
const numbers2 = document.querySelectorAll('[data-number]');
const result = document.querySelector('.output');
const operators = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');

let firstNumber = "";
let secondNumber = "";

// 



operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (mod2) {
            firstNumber = parseFloat(result.textContent)
            parseFloat(result.textContent) = firstNumber
            mod2 = false;
        } else if (!mod2) {
            secondNumber = parseFloat(result.textContent)
            parseFloat(result.textContent) = secondNumber
            mod2 = true;
        }

        result.innerHTML += ` ${operator.textContent} `;

    });
})
clear.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    result.innerHTML = '';
});
