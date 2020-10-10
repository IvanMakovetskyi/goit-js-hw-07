const increment = document.querySelector('[data-action=increment]')
const decrement = document.querySelector('[data-action=decrement]')
const value = document.querySelector('#value')
let counterValue = 0;

increment.addEventListener('click', () => {
  counterValue += 1
  value.textContent = counterValue
})

decrement.addEventListener('click', () => {
  counterValue -= 1
  value.textContent = counterValue
})