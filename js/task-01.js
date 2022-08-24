
/* Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
 и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения. */

/* 
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
 */

const listItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);
console.log('');
console.log(listItems);

for(let i = 0; i<listItems.length; i+=1){
    console.log(`Category: ${listItems[i].firstElementChild.textContent}`);
    console.log(`Elements: ${listItems[i].lastElementChild.children.length}`);
    console.log('');
};

// const result = listItems.map(option => {

//     console.log(`Category: ${option.firstElementChild.textContent}`);
//     console.log(`Elements: ${option.lastElementChild.children.length}`);
//     console.log('');

// })