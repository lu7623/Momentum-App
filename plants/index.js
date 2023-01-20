console.log("Вёрстка валидная +10 \n Вёрстка семантическая +20 \n Вёрстка соответствует макету +40\n Требования к css + 10 \n Интерактивность, реализуемая через css +20 \n Итого 100");
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

