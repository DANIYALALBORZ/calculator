const numbers = document.querySelectorAll('[data-number]');
const result = document.querySelector('.output');
const operators = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');
const equal = document.querySelector('[data-equals]');

let firstNumber = "";
let secondNumber = "";
let op = '';

let mod2 = true;

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (mod2) {
            result.innerHTML += number.textContent;
            firstNumber += number.textContent;
            console.log('first number : ', firstNumber);
        } else if (!mod2) {
            result.innerHTML += number.textContent;
            secondNumber += number.textContent;
            console.log('second number : ', secondNumber);
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        result.innerHTML += operator.textContent;
        op += operator.textContent;
        mod2 = !mod2;
        console.log('operator : ', op);
    })
})

equal.addEventListener('click', () => {
    if (op === '+') {
        let submit = parseFloat(firstNumber) + parseFloat(secondNumber);
        result.innerHTML = submit;
    }
})