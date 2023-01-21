
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
  });