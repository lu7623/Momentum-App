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
    if (time < 6) return 'nigth';
    else if (time < 12) return 'morning';
    else if (time < 18) return 'afternoon';
    else return 'evening';
 }

 function showGreeting() {
   let time = getHours(); 
   let n = getTimeOfDay(time);
    greeting.textContent = `Good ${n},` ;
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

  //backgroung image
  
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
 
let randomNum;

  function getRandomNum() {
    randomNum = Math.ceil(Math.random()*20);
  }
  getRandomNum();
  
  function setBg() {
    const img = new Image();
    let time = getHours(); 
    let timeOfDay = getTimeOfDay(time);
    let bgNum = String(randomNum).padStart(2,0);
    img.src = `https://raw.githubusercontent.com/lu7623/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {      
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/lu7623/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  }; 
   console.log(randomNum);
  }
  setBg();

  function getSlideNext(){
    if (randomNum < 20) { 
        randomNum +=1;  
    } else {
        randomNum = 1;
    }
    setBg();
  }

  slideNext.addEventListener('click', getSlideNext);

  function getSlidePrev(){
    if (randomNum > 1) { 
        randomNum -=1;  
    } else {
        randomNum = 20;
    }
    setBg();
  }

  slidePrev.addEventListener('click', getSlidePrev);
