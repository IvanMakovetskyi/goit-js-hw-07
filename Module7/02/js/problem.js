const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('ul');

const elements = [];
for (const ingredient of ingredients) {
  element = document.createElement('li')
  element.textContent = ingredient
  elements.push(element)
}
console.log(elements)
elements.forEach((element) => list.appendChild(element))

