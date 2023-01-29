const time = document.querySelector('.time');
const date1 = document.querySelector('.date');

function showDate() {
    const date = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('ru-RU', options);
date1.textContent = currentDate;
}


function showTime() {
    const date = new Date();
const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
  }

  showTime();

  //greeting

  showGreeting()