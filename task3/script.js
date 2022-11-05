const trafficLightEl = document.querySelector('#trafficLight1');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = null;
    trafficLightE3.style.background = null;
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);



const trafficLightE2 = document.querySelector('#trafficLight2');

function makeYellow() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = null;
    trafficLightE3.style.background = null;
    trafficLightE2.removeEventListener('click', makeYellow);
    trafficLightE2.addEventListener('click', makeRed);
}

trafficLightE2.addEventListener('click', makeYellow);



const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightE3.style.background = ('red');
    trafficLightEl.style.background = null;
    trafficLightE2.style.background = null;
    trafficLightE3.removeEventListener('click', makeRed);
    trafficLightE3.addEventListener('click', makeGreen);
}

trafficLightE3.addEventListener('click', makeRed);

//При нажатие на круг отвечающий за зеленый - загораеться зеленый. При повторном нажатие на это круг - зеленый гаснет, загораеться круг отвечающеий за желтый круг.Далее все по анологиию 
// Как сделать, чтобы при нажатие на ЛЮБОЙ круг светофор менял цвета правильно, я не понял. НО ОЧЕНЬ ИНТРЕСНО, было бы круто если это возможно объяснить, как это делаеться. Спасибо.






