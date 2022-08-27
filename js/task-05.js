/*
Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение 
в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

*/

const refs ={

    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event){

    refs.nameLabel.textContent = event.currentTarget.value;

    // window.addEventListener('keydown', onSpanKeypress); // Хотел,чтоб на 'пробел' печатал Anonymous Но что то не так !! :)
}; 

// function onSpanKeypress(event) {

//     const SPAN_KEY_CODE = 'Space';
//     const isSpanKey = event.code === SPAN_KEY_CODE;

//     if (isSpanKey) {
     
//         refs.nameLabel.textContent = 'Anonymous';
//     }
//   };
 