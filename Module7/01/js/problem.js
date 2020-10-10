const generalCategories = document.querySelector('#categories');
const items = generalCategories.querySelectorAll('.item');


console.log(`В списке ${items.length} категории`)
items.forEach((item) => console.log(`Категория: ${item.querySelector('h2').textContent}  Количество элементов: ${item.querySelector('ul').children.length}`))
console.log(items)
