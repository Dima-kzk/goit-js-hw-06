const decrement = document.querySelector('#counter button[data-action="decrement"]');
const increment = document.querySelector('#counter button[data-action="increment"]');


let counterValue = 0;

const value = document.getElementById("value");

decrement.addEventListener("click", () => value.textContent = --counterValue);
increment.addEventListener("click", () => value.textContent = ++counterValue);