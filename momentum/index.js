// date and time

const time = document.querySelector('.time');
const date1 = document.querySelector('.date');

function showDate() {
    const date = new Date();
const options = { weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-EN', options);
date1.textContent = currentDate;
}


function showTime() {
    const date = new Date();
const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
    showGreeting();
  }


  //greeting

const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');


function getHours() {
const date = new Date();
const hours = date.getHours();
return hours;
  }

 function getTimeOfDay(time) {
    if (time < 6) return 'Good night, ';
    else if (time < 12) return 'Good morning, ';
    else if (time < 18) return 'Good afternoon, ';
    else return 'Good evening, ';
 }

 function showGreeting() {
   let time = getHours(); 
    greeting.textContent = getTimeOfDay(time) ;
  }

 
  function setLocalStorage() {
    localStorage.setItem('username', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('username')) {
      name.value = localStorage.getItem('username');
    }
  }
  window.addEventListener('load', getLocalStorage);


  showTime();
  