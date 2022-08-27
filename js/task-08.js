/*
Задание 8
Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства,
 а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */

const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

  event.preventDefault(); // предотвратить реакцию браузера по умолчанию (для форм, клипов по ссылкам...)

  const formData = new FormData(event.currentTarget);

  console.log(formData);
  formData.forEach((value, name) => {

    if (!value || !name) {
      window.alert('Please input data!');
      return;
    }
    console.log('onFormSubmit -> value', value);
    console.log('onFormSubmit -> name', name);
  });

};

//*  Не понимаю что и как делает  reset !!??
document.getElementsByClassName('login-form').reset;

 HTMLFormElement.reset

