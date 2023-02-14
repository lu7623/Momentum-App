const state = {
  language: "en",
  photoSource: "github",
  blocks: ["time", "date", "greeting", "quote", "weather", "audio", "todolist"],
};

// date and time

const time = document.querySelector(".time");
const date1 = document.querySelector(".date");

function showDate() {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  let lang;
  state.language == "en" ? (lang = "en-EN") : (lang = "ru-RU");
  const currentDate = date.toLocaleDateString(lang, options);
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

const greeting = document.querySelector(".greeting");
const name = document.querySelector(".name");

function getHours() {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}

function getTimeOfDay(time) {
  if (time < 6) return "nigth";
  else if (time < 12) return "morning";
  else if (time < 18) return "afternoon";
  else return "evening";
}

function showGreeting() {
  let time = getHours();
  let n = getTimeOfDay(time);
  if (state.language == "en") {
    greeting.textContent = `Good ${n},`;
  } else if (state.language == "ru") {
    name.placeholder = "[Введите имя]";
    if (n == "night") {
      greeting.textContent = "Доброй ночи, ";
    } else if (n == "morning") {
      greeting.textContent = "Доброе утро, ";
    } else if (n == "afternoon") {
      greeting.textContent = "Добрый день, ";
    } else {
      greeting.textContent = "Добрый вечер, ";
    }
  }
}

showTime();

//backgroung image

const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

let randomNum;

function getRandomNum() {
  randomNum = Math.ceil(Math.random() * 20);
}
getRandomNum();

function setBgGithub() {
  const img = new Image();
  let time = getHours();
  let timeOfDay = getTimeOfDay(time);
  let bgNum = String(randomNum).padStart(2, 0);
  img.src = `https://raw.githubusercontent.com/lu7623/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/lu7623/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  };
}
setBgGithub();

function getSlideNext() {
  if (state.photoSource == "github") {
    if (randomNum < 20) {
      randomNum += 1;
    } else {
      randomNum = 1;
    }
    setBgGithub();
  } else if (state.photoSource == "unsplash") {
    setBgUnsplash();
  } else if (state.photoSource == "flickr") {
    setBgFlickr();
  }
}

slideNext.addEventListener("click", getSlideNext);

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum -= 1;
  } else {
    randomNum = 20;
  }
  setBgGithub();
}

slidePrev.addEventListener("click", getSlidePrev);

// local weather

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const error = document.querySelector(".weather-error");
const weather = document.querySelector(".weather");

if (state.language == "en") {
  city.value = "Minsk";
} else if (state.language == "ru") {
  city.value = "Минск";
}

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${state.language}&appid=69d8742959633abc3c7e3a16af14871a&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `${data.main.humidity}%`;
    error.innerText = "";
  } catch (e) {
    error.innerText = "Error! try to enter another city";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
  }
}

function setCity(event) {
  if (event.code === "Enter") {
    getWeather();
    city.blur();
  }
}

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);

function setLocalStorage() {
  localStorage.setItem("username", name.value);
  localStorage.setItem("usercity", city.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("username")) {
    name.value = localStorage.getItem("username");
  }
  if (localStorage.getItem("usercity")) {
    city.value = localStorage.getItem("usercity");
  }
}
window.addEventListener("load", getLocalStorage);

//quotes

const author = document.querySelector(".author");
const quote = document.querySelector(".quote");
const changeQuote = document.querySelector(".change-quote");

async function getQuoteEn() {
  const quoteUrl = `https://type.fit/api/quotes`;
  const res = await fetch(quoteUrl);
  const data = await res.json();
  let randomQuote = Math.floor(Math.random() * data.length);
  quote.innerText = data[randomQuote].text;
  author.innerText = data[randomQuote].author;
}

getQuoteEn();

changeQuote.addEventListener("click", getQuoteEn);

// async function getQuoteRu() {

//   const quoteUrl = `https://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=8090&lang=en`;
//   const res = await fetch(quoteUrl);
//   const data = await res.json();
//   console.log(data);
// quote.innerText = data.quoteText;
// author.innerText = data.quoteAuthor;
// }
// getQuoteRu();

// audio player

const audio = new Audio();
const playBtn = document.querySelector(".play");
const nextAudio = document.querySelector(".play-next");
const prevAudio = document.querySelector(".play-prev");
const playListContainer = document.querySelector(".play-list");
const player = document.querySelector(".player");
let isPlay = false;
let playNum = 0;
import playList from "./playList.js";

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  console.log(playList[playNum].src);
}

function pauseAudio() {
  audio.pause();
}

playBtn.addEventListener("click", () => {
  if (isPlay == false) {
    playAudio();
    isPlay = true;
    playBtn.classList.add("pause");
  } else {
    pauseAudio();
    isPlay = false;
    playBtn.classList.remove("pause");
  }
});

nextAudio.addEventListener("click", () => {
  if (playNum < playList.length - 1) {
    playNum = playNum + 1;
  } else {
    playNum = 0;
  }
  playAudio();
  playBtn.classList.add("pause");
  isPlay = true;
});

prevAudio.addEventListener("click", () => {
  if (playNum > 0) {
    playNum = playNum - 1;
  } else {
    playNum = playList.length - 1;
  }
  playAudio();
  playBtn.classList.add("pause");
  isPlay = true;
});

playList.forEach((el) => {
  const li = document.createElement("li");
  li.classList.add("play-item");
  li.textContent = el.title;
  playListContainer.append(li);
});

// background from API

//const unsplashUrl = 'https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=rEz5fpSUULbWREfG6Yj64VdzGQHkGdRR7iAabjo3fT0'

//const flickrUrl = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d9ed9dcf3ac57aec450fcde722caec11&tags=nature&extras=url_l&format=json&nojsoncallback=1';

async function getLinkToImageUnsplash(anyurl) {
  const url = anyurl;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular);
  return data.urls.regular;
}

async function setBgUnsplash() {
  const img = new Image();
  let time = getHours();
  let timeOfDay = getTimeOfDay(time);
  const unsplashUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=rEz5fpSUULbWREfG6Yj64VdzGQHkGdRR7iAabjo3fT0`;
  const imgUrl = await getLinkToImageUnsplash(unsplashUrl);
  console.log(imgUrl);
  body.style.backgroundImage = `url(${imgUrl})`;
}

async function getLinkToImageFlickr(anyurl) {
  const url = anyurl;
  const res = await fetch(url);
  const data = await res.json();
  let random = Math.floor(Math.random() * 100);
  return data.photos.photo[random].url_l;
}

async function setBgFlickr() {
  let time = getHours();
  let timeOfDay = getTimeOfDay(time);
  const flickrUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d9ed9dcf3ac57aec450fcde722caec11&tags=${timeOfDay},nature&extras=url_l&format=json&nojsoncallback=1`;
  const imgUrl = await getLinkToImageFlickr(flickrUrl);
  console.log(imgUrl);
  body.style.backgroundImage = `url(${imgUrl})`;
}

//settings

const settingsBtn = document.querySelector(".settings-btn");
const settings = document.querySelector(".settings");
const languageSet = document.getElementById("language");
const photoSet = document.getElementById("photo");
const blocksSet = document.getElementById("blocks");
const languageOptions = document.querySelector(".language-option");
const photoOptions = document.querySelector(".photo-option");
const blocksOptions = document.querySelector(".blocks-option");
const options = document.querySelectorAll(".options");

settingsBtn.addEventListener("click", () => {
  if (!settings.classList.contains("settings-open")) {
  settings.classList.add("settings-open");}
  else {
    settings.classList.remove("settings-open");
    settings.classList.remove("settings-open1");
  options.forEach((x) => {
    if (x.classList.contains("options-open")) {
      x.classList.remove("options-open");
    }
  });
  
  }
});

function toggleSettings(x, y, z) {
  let isXOpen = x.classList.contains("options-open");
  let isYOpen = y.classList.contains("options-open");
  let isZOpen = z.classList.contains("options-open");

  if (isXOpen == false && isYOpen == false && isZOpen == false) {
    x.classList.add("options-open");
    settings.classList.add("settings-open1");
  } else if (isXOpen == true && isYOpen == false && isZOpen == false) {
    x.classList.remove("options-open");
    settings.classList.remove("settings-open1");
  } else if (isXOpen == false && isYOpen == true && isZOpen == false) {
    x.classList.add("options-open");
    y.classList.remove("options-open");
  } else if (isXOpen == false && isYOpen == false && isZOpen == true) {
    x.classList.add("options-open");
    z.classList.remove("options-open");
  }
}

languageSet.addEventListener("click", () => {
  toggleSettings(languageOptions, photoOptions, blocksOptions);
});

photoSet.addEventListener("click", () => {
  toggleSettings(photoOptions, languageOptions, blocksOptions);
});

blocksSet.addEventListener("click", () => {
  toggleSettings(blocksOptions, languageOptions, photoOptions);
});

const photo = document.getElementsByName("photo");

photo.forEach((elem) => {
  elem.addEventListener("change", function (event) {
    var item = event.target.value;
    if (item == "github") {
      state.photoSource = "github";
      setBgGithub();
    } else if (item == "unsplash") {
      state.photoSource = "unsplash";
      setBgUnsplash();
    } else if (item == "flickr") {
      state.photoSource = "flickr";
      setBgFlickr();
    }
    console.log(state.photoSource);
  });
});

const lang = document.getElementsByName("lang");
const english = document.getElementById("en");
const russian = document.getElementById("ru");
const timeSet = document.getElementById("timeSet");
const dateSet = document.getElementById("dateSet");
const greetinSet = document.getElementById("greetinSet");
const quotesSet = document.getElementById("quotesSet");
const weatherSet = document.getElementById("weatherSet");
const audioSet = document.getElementById("audioSet");
const todoSet = document.getElementById("todoSet");

lang.forEach((elem) => {
  elem.addEventListener("change", function (event) {
    var item = event.target.value;
    if (item == "en") {
      state.language = "en";
      getWeather();
      settingsTranslate();
    } else if (item == "ru") {
      state.language = "ru";
      getWeather();
      settingsTranslate();
    }
    console.log(state);
  });
});

function settingsTranslate() {
  if (state.language == "en") {
    languageSet.innerText = "Language";
    photoSet.innerText = "Photo Source";
    blocksSet.innerText = "Blocks";
    english.innerText = "English";
    russian.innerText = "Russian";
    timeSet.innerText = "Time";
    dateSet.innerText = "Date";
    greetinSet.innerText = "Greeting";
    quotesSet.innerText = "Quote";
    weatherSet.innerText = "Weather";
    audioSet.innerText = "Audio";
    todoSet.innerText = "ToDo list";
  } else if (state.language == "ru") {
    languageSet.innerText = "Выбор языка";
    photoSet.innerText = "Источник изображений";
    blocksSet.innerText = "Блоки";
    english.innerText = "Английский";
    russian.innerText = "Русский";
    timeSet.innerText = "Время";
    dateSet.innerText = "Дата";
    greetinSet.innerText = "Приветствие";
    quotesSet.innerText = "Цитата";
    weatherSet.innerText = "Погода";
    audioSet.innerText = "Аудио";
    todoSet.innerText = "Список дел";
  }
}
settingsTranslate();

const timeSwitch = document.getElementById("timeSwitch");
const dateSwitch = document.getElementById("dateSwitch");
const greetingSwitch = document.getElementById("greetingSwitch");
const quoteSwitch = document.getElementById("quoteSwitch");
const weatherSwitch = document.getElementById("weatherSwitch");
const audioSwitch = document.getElementById("audioSwitch");
const todoSwitch = document.getElementById("todoSwitch");

function hideBlocks() {
  if (!timeSwitch.checked) {
    time.classList.add("hide");
  } else {
    time.classList.remove("hide");
  }
  if (!dateSwitch.checked) {
    date1.classList.add("hide");
  } else {
    date1.classList.remove("hide");
  }
  if (!greetingSwitch.checked) {
    greeting.classList.add("hide");
    name.classList.add("hide");
  } else {
    greeting.classList.remove("hide");
    name.classList.remove("hide");
  }
  if (!quoteSwitch.checked) {
    quote.classList.add("hide");
    author.classList.add("hide");
    changeQuote.classList.add("hide");
  } else {
    quote.classList.remove("hide");
    author.classList.remove("hide");
    changeQuote.classList.remove("hide");
  }
  if (!weatherSwitch.checked) {
    weather.classList.add("hide");
  } else {
    weather.classList.remove("hide");
  }
  if (!audioSwitch.checked) {
    player.classList.add("hide");
    playListContainer.classList.add("hide");
  } else {
    player.classList.remove("hide");
    playListContainer.classList.remove("hide");
  }
}

const optionsSwitch = document.querySelectorAll(".optionsSwitch");
optionsSwitch.forEach((x) => {
  x.addEventListener("change", hideBlocks);
});
