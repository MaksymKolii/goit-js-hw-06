/*
Задание 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
*/

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const eventTarget = event.currentTarget;
  const result = (input.textContent = eventTarget.value);

  result.length < input.dataset.length
    ? eventTarget.classList.add('invalid')
    : eventTarget.classList.add('valid');
}; 



// const input = document.querySelector('#validation-input');

// input.addEventListener('input', onInputText);

// function onInputText(event){

//   console.log(event);
//   input.addEventListener('blur', onInputBlur);
// };

// function onInputBlur(event){

//   input.textContent = document.querySelector('#validation-input').value;
//   console.log(input.textContent.length);
 
//   const eventTarget = event.currentTarget;
//   input.textContent.length < input.dataset.length
//   ? eventTarget.classList.add('invalid')
//   : eventTarget.classList.add('valid');
// };
