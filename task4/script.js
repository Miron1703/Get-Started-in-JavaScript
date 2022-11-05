const userText = prompt('Измените текст ссылки');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в a изменён на', userText);

userTextField.addEventListener('click', function(event) {
    // тело обработчика
    this.textContent = 'Вы уеерены что хотите ерейти по ссылке?';
    event.preventDefault();
    // конец тела обработчика
})