//burger-menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const a = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("mousedown", function () {
  if (!menuBtn.classList.contains("menu-btn-close")) {
    menu.classList.add("menu-active");
    menuBtn.classList.add("menu-btn-close");
  } else {
    menu.classList.remove("menu-active");
    menuBtn.classList.remove("menu-btn-close");
  }
});
for (let link of a) {
  link.addEventListener("click", function () {
    menu.classList.remove("menu-active");
    menuBtn.classList.remove("menu-btn-close");
  });
}

document.addEventListener("click", function (e) {
  if (
    menu.classList.contains("menu-active") &&
    !e.target.classList.contains("close")
  ) {
    menu.classList.remove("menu-active");
    menuBtn.classList.remove("menu-btn-close");
  }
});

//service buttons

const gardens = {
  btn: document.querySelector(".btn-gardens"),
  cards: document.querySelectorAll(".card-gardens"),
};

const planting = {
  btn: document.querySelector(".btn-planting"),
  cards: document.querySelectorAll(".card-planting"),
};

const lawn = {
  btn: document.querySelector(".btn-lawn"),
  cards: document.querySelectorAll(".card-lawn"),
};

function removeBlur(n) {
  setTimeout(() => {
    for (let card of n.cards) {
      card.classList.remove("blur");
    }
  }, 300);
}

function addBlur(n) {
  setTimeout(() => {
    for (let card of n.cards) {
      card.classList.add("blur");
    }
  }, 300);
}

function onclick(x, y, z) {
  let xBtnActive = x.btn.classList.contains("service-button-clicked");
  let yBtnActive = y.btn.classList.contains("service-button-clicked");
  let zBtnActive = z.btn.classList.contains("service-button-clicked");

  if (xBtnActive == false && yBtnActive == false && zBtnActive == false) {
    x.btn.classList.add("service-button-clicked");
    addBlur(y);
    addBlur(z);
  } else if (xBtnActive == false && yBtnActive == true && zBtnActive == false) {
    x.btn.classList.add("service-button-clicked");
    removeBlur(x);
  } else if (xBtnActive == false && yBtnActive == false && zBtnActive == true) {
    x.btn.classList.add("service-button-clicked");
    removeBlur(x);
  } else if (xBtnActive == true && yBtnActive == false && zBtnActive == false) {
    x.btn.classList.remove("service-button-clicked");
    removeBlur(y);
    removeBlur(z);
  } else if (xBtnActive == true && yBtnActive == true && zBtnActive == false) {
    x.btn.classList.remove("service-button-clicked");
    addBlur(x);
  } else if (xBtnActive == true && yBtnActive == false && zBtnActive == true) {
    x.btn.classList.remove("service-button-clicked");
    addBlur(x);
  }
}

gardens.btn.addEventListener("click", function () {
  onclick(gardens, lawn, planting);
});

lawn.btn.addEventListener("click", function () {
  onclick(lawn, gardens, planting);
});

planting.btn.addEventListener("click", function () {
  onclick(planting, lawn, gardens);
});

//Prices accordion

const basic = {
  price: document.getElementById("basics"),
  text: document.getElementById("basics-text"),
  dropdown: document.getElementById("dropdown-basics"),
};

const standard = {
  price: document.getElementById("standard"),
  text: document.getElementById("standard-text"),
  dropdown: document.getElementById("dropdown-standard"),
};

const procare = {
  price: document.getElementById("procare"),
  text: document.getElementById("procare-text"),
  dropdown: document.getElementById("dropdown-procare"),
};

function priceOpen(n) {
  n.price.classList.add("price-open");
  n.text.classList.add("price-text-open");
  n.dropdown.classList.add("arrow-open");
}

function priceClose(n) {
  n.price.classList.remove("price-open");
  n.text.classList.remove("price-text-open");
  n.dropdown.classList.remove("arrow-open");
}

function choosePrice(x, y, z) {
  if (!x.price.classList.contains("price-open")) {
    priceOpen(x);
  } else {
    priceClose(x);
  }
  if (y.price.classList.contains("price-open")) {
    priceClose(y);
  }
  if (z.price.classList.contains("price-open")) {
    priceClose(z);
  }
}

basic.dropdown.addEventListener("click", function () {
  choosePrice(basic, standard, procare);
});
standard.dropdown.addEventListener("click", function () {
  choosePrice(standard, basic, procare);
});
procare.dropdown.addEventListener("click", function () {
  choosePrice(procare, standard, basic);
});

let order = document.querySelectorAll(".order");
order.forEach((el) =>
  el.addEventListener("click", function () {
    window.location = "#contacts";
  })
);

//City accordion

const citySelect = document.querySelector(".city-btn");
const cityOptions = document.querySelector(".city-options");
const drop = document.getElementById("drop-city");
const address = document.querySelectorAll(".address");

citySelect.addEventListener("click", function () {
  cityOptions.classList.toggle("city-options-open");
  citySelect.classList.add("city-btn-open");
  drop.classList.toggle("dropdown-city-open");
  for (let adcity of address) {
    if (adcity.classList.contains("address-open")) {
      adcity.classList.remove("address-open");
    }
  }
});

const canandaigua = {
  btn: document.getElementById("canandaigua"),
  address: document.getElementById("canandaigua-address"),
  call: document.getElementById("call-canandaigua"),
  text: "Canandaigua, NY",
  phone: "tel:+15853930001",
};

const newyork = {
  btn: document.getElementById("newyork"),
  address: document.getElementById("newyork-address"),
  call: document.getElementById("call-newyork"),
  text: "New York City",
  phone: "tel:+12124560002",
};

const yonkers = {
  btn: document.getElementById("yonkers"),
  address: document.getElementById("yonkers-address"),
  call: document.getElementById("call-yonkers"),
  text: "Yonkers, NY",
  phone: "tel:+19146780003",
};

const sherrill = {
  btn: document.getElementById("sherrill"),
  address: document.getElementById("sherrill-address"),
  call: document.getElementById("call-sherrill"),
  text: "Sherrill, NY",
  phone: "tel:+13159080004",
};

const city = document.getElementById("city");
const cities = [canandaigua, newyork, yonkers, sherrill];

function chooseCity(x) {
  setTimeout(() => {
    cityOptions.classList.remove("city-options-open");
    city.textContent = x.text;
    drop.classList.remove("dropdown-city-open");
    x.address.classList.add("address-open");
  }, 300);
}

cities.forEach((el) => {
  el.btn.addEventListener("click", function () {
    chooseCity(el);
  });
  el.call.addEventListener("click", function () {
    window.open(el.phone);
  });
});
