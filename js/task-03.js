/* Задание 3
Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

<ul class="gallery"></ul>

Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй
 шаблонные строки и метод insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]; */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesGalleryRef = document.querySelector('.gallery');

const makeListImagesMarkup = ({url, alt}) =>{
  return `
  <li class="gallery__item">
    <img src="${url}" width = '400' alt="${alt}">
  </li> `
};

const makeListImages = images.map(makeListImagesMarkup).join('');

imagesGalleryRef.insertAdjacentHTML('beforeend',makeListImages);

//? ЕЩЁ 3 Олдскульных ( ?? ) варианта !!!!  ниже
//* 1 Скрипт закоментирован
// const elements = images.map( ({url, alt}) => {

//   const imageRef =  document.createElement('img');
//   imageRef.src = url;
//   imageRef.alt = alt;
//   const galeryItemRef = document.createElement('li');
//   galeryItemRef.classList.add('galery__list');
//   galeryItemRef.append(imageRef);

//   return galeryItemRef;
// });


//* 2 Функция makeOneImageSample создает шаблон для объекта
// const makeOneImageSample = ({url, alt}) => {

//     const imageRef =  document.createElement('img');
//     imageRef.src = url;
//     imageRef.alt = alt;
//     const galeryItemRef = document.createElement('li');
//     galeryItemRef.classList.add('galery__list');
//     galeryItemRef.append(imageRef);
  
//     return galeryItemRef;
//   };

//* Передаем эту Фу (callback) по ссылке и мапаем
 //const elements = images.map(makeOneImageSample);
 //imagesGalleryRef.append(...elements);


//* 3 Функция
// const makeimageGalery = objects => {

//   return objects.map( ({url, alt}) => {

//     const imageRef =  document.createElement('img');
//     imageRef.src = url;
//     imageRef.alt = alt;
//     const galeryItemRef = document.createElement('li');
//     galeryItemRef.classList.add('galery__list');
//     galeryItemRef.append(imageRef);
  
//     return galeryItemRef;
//   });

// };
// const elements = makeimageGalery(images);
// console.log(elements);
// imagesGalleryRef.append(...elements);





// const list = document.querySelector('.gallery')

// const markup = images
// 	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
// 	.join('')

//   list.insertAdjacentHTML('beforeend', markup)
//     // const img = document.createElement('img')
  
// const pictures = document.querySelectorAll('.picture')

// list.style.display = 'flex';
// list.style.flexWrap = 'column-reverse'
// list.style.listStyle = 'none'
// list.style.gap = '20px'
// list.style.justifyContent = 'center'