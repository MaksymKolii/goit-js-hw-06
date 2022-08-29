/*
Задание 9
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение
 цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

const refs ={

  changeColorButton: document.querySelector('.change-color'),
  showColor: document.querySelector('.color'),
};


refs.changeColorButton.addEventListener('click', onInputChangeBodyColor);

function onInputChangeBodyColor() {

  refs.showColor.textContent = document.body.style.background = getRandomHexColor();

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const inputChange = document.querySelector('input#font-size-control')
// const abracadabra = document.querySelector('span#text')

// inputChange.addEventListener('change', e => {
//     abracadabra.style.fontSize = `${e.target.value }px`
// })