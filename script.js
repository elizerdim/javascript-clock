const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
    const currentTime = new Date();

    const currentHour = currentTime.getHours();
    hourHand.style.transform = `rotate(${currentHour*30}deg)`;

    currentMinutes = currentTime.getMinutes();
    minHand.style.transform = `rotate(${currentMinutes*6}deg)`;

    currentSeconds = currentTime.getSeconds();
    secondHand.style.transform = `rotate(${currentSeconds*6}deg)`;
}

setInterval(setClock, 1000);

setClock();