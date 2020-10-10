const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')
console.log(input.style)

input.addEventListener('input', ()=> {
    span.style.fontSize = `${57}px`
    console.log(span.style.fontSize)
})