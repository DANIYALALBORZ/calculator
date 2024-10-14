const numbers = document.querySelectorAll('[data-number]');
const result = document.querySelector('.output');

let x = numbers;
console.log(x);

x.forEach(number => {
    number.addEventListener('click', () => {
        result.innerHTML += number.textContent;
    })
});