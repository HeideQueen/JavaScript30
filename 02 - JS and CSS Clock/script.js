const secondHand = document.querySelector('.second-hand'),
      minuteHand = document.querySelector('.min-hand'),
      hourHand   = document.querySelector('.hour-hand');

const updateClock = (seconds, minutes, hours) => {
    secondHand.style.transform = `rotate(${seconds}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform   = `rotate(${hours}deg)`;
}

const setDate = () => {
    const now              = new Date(),
          seconds          = now.getSeconds(),
          minutes          = now.getMinutes(),
          hours            = now.getHours(),
          hoursToDegrees   = (30 * hours) + 90,
          minutesToDegrees = ((minutes / 60) * 360) + 90,
          secondsToDegrees = ((seconds / 60) * 360) + 90;
    updateClock(secondsToDegrees, minutesToDegrees, hoursToDegrees);
}

setInterval(setDate, 1000);