
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
const a  = document.querySelectorAll('.nav-link');
const closed =document.querySelector('.menu-btn-closed');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('menu-active');
    menuBtn.classList.toggle('menu-btn-close');
});
for (let link of a) {
link.addEventListener('click', function(){
    menu.classList.remove('menu-active');
    menuBtn.classList.remove('menu-btn-close');
})
}

document.addEventListener('click', function(e) {
    if (menu.classList.contains("menu-active") && !e.target.classList.contains('close')) {
        menu.classList.remove('menu-active');
        menuBtn.classList.remove('menu-btn-close');
    }
  })

  
  let btnGardens = document.querySelector('.btn-gardens');
  let btnLawn = document.querySelector('.btn-lawn');
  let btnPlanting = document.querySelector('.btn-planting');

  let cardGardens = document.querySelectorAll('.card-gardens');
  let cardPlanting = document.querySelectorAll('.card-planting');
  let cardLawn = document.querySelectorAll('.card-lawn');

  btnGardens.addEventListener('click', function(){
    for (let card of cardPlanting) {
	card.classList.toggle('blur');}
    for (let card of cardLawn) {
        card.classList.toggle('blur');}
});

btnLawn.addEventListener('click', function(){
    for (let card of cardPlanting) {
	card.classList.toggle('blur');}
    for (let card of cardGardens) {
        card.classList.toggle('blur');}
});

btnPlanting.addEventListener('click', function(){
    for (let card of cardLawn) {
	card.classList.toggle('blur');}
    for (let card of cardGardens) {
        card.classList.toggle('blur');}
});


const basicPrice = document.getElementById('basics');
const basicText = document.getElementById('basics-text');
basicPrice.addEventListener('click', function(){
    basicPrice.classList.toggle('price-open');
    basicText.classList.toggle('price-text-open');
    basicText.classList.toggle('price-text-closed');
})

const standardPrice = document.getElementById('standard');
const standardText = document.getElementById('standard-text');
standardPrice.addEventListener('click', function(){
    standardPrice.classList.toggle('price-open');
    standardText.classList.toggle('price-text-open');
    standardText.classList.toggle('price-text-closed');
})

const procarePrice = document.getElementById('procare');
const procareText = document.getElementById('procare-text');
procarePrice.addEventListener('click', function(){
    procarePrice.classList.toggle('price-open');
    procareText.classList.toggle('price-text-open');
    procareText.classList.toggle('price-text-closed');
})

let order = document.querySelectorAll('.order');
order.forEach(el => el.addEventListener('click', function(){
            window.location ='#contacts'}));
