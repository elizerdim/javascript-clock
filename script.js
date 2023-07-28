const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock() {
    const currentTime = new Date();
    
    const currentSecond = currentTime.getSeconds();
    secondHand.style.transform = `rotate(${currentSecond*6}deg)`;
    
    const currentMinute = currentTime.getMinutes();
    minHand.style.transform = `rotate(${currentMinute*6 + currentSecond*(6 / 60)}deg)`;
    
    const currentHour = currentTime.getHours();
    hourHand.style.transform = `rotate(${currentHour*30 + currentMinute*(30 / 60)}deg)`;
}

setInterval(setClock, 1000);

setClock();