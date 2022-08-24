
/*  В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>

В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients. */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsPickerContainer = document.querySelector('#ingredients');

//* 1 Script working and comment
// const elem = ingredients.map(option => {

//   const listEl = document.createElement('li');
//   listEl.classList.add('item');
//   listEl.textContent = option;
//   return listEl;

// });
// console.log(elem);
// ingredientsPickerContainer.append(...elem);

//* 2 Function
const makeIngredientsPicker = options => {
  return options.map(option => {

    const listEl = document.createElement('li');
    listEl.classList.add('item');
    listEl.textContent = option;
    return listEl;
  
  })
};
const elements = makeIngredientsPicker(ingredients);
ingredientsPickerContainer.append(...elements);
