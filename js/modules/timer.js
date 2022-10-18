function timer(selector) {
  const deadline = Date.parse(new Date()) + 10 * 24 * 60 * 60 * 1000; // можем указывать количество дней до конца акции

  function getTimeRemaining(endTime) {
    let t = endTime - Date.parse(new Date());

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function addZero(num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setTimerOnPage(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds');

    countTime();

    let timerID = setInterval(countTime, 1000);

    function countTime() {
      let newTimer = getTimeRemaining(endTime);

      days.innerHTML = addZero(newTimer.days);
      hours.innerHTML = addZero(newTimer.hours);
      minutes.innerHTML = addZero(newTimer.minutes);
      seconds.innerHTML = addZero(newTimer.seconds);

      if (newTimer.total <= 0) {
        clearInterval(timerID);
      }
    }
  }

  setTimerOnPage(selector, deadline);
}

// синтаксис  CommonJS
// module.exports = timer;

export default timer;
