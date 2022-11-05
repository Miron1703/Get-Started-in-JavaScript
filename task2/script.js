const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alertID = document.querySelector('#alertID');

alertID.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})


const promptID = document.querySelector('#promptID');

promptID.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})
