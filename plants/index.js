//burger-menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const a  = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('mousedown', function(){
    if(!menuBtn.classList.contains('menu-btn-close')){
	menu.classList.add('menu-active');
    menuBtn.classList.add('menu-btn-close');}
    else {menu.classList.remove('menu-active');
    menuBtn.classList.remove('menu-btn-close');}
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

  //service buttons

  let btnGardens = document.querySelector('.btn-gardens');
  let btnLawn = document.querySelector('.btn-lawn');
  let btnPlanting = document.querySelector('.btn-planting');

  let cardGardens = document.querySelectorAll('.card-gardens');
  let cardPlanting = document.querySelectorAll('.card-planting');
  let cardLawn = document.querySelectorAll('.card-lawn');

  btnGardens.addEventListener('click', function(){
    
    if ((!btnGardens.classList.contains('service-button-clicked')) && (!btnPlanting.classList.contains('service-button-clicked')) && (!btnLawn.classList.contains('service-button-clicked'))){

        btnGardens.classList.add('service-button-clicked');
    for (let card of cardPlanting) {
	card.classList.add('blur');}
    for (let card of cardLawn) {
        card.classList.add('blur');}
    }

    else if ((!btnGardens.classList.contains('service-button-clicked')) && (btnPlanting.classList.contains('service-button-clicked')) && (!btnLawn.classList.contains('service-button-clicked'))){
 btnGardens.classList.add('service-button-clicked');
    for (let card of cardGardens) {
        card.classList.remove('blur');}
    }

    else if ((!btnGardens.classList.contains('service-button-clicked')) && (!btnPlanting.classList.contains('service-button-clicked')) && (btnLawn.classList.contains('service-button-clicked'))){
        btnGardens.classList.add('service-button-clicked');
           for (let card of cardGardens) {
               card.classList.remove('blur');}
           }

    else if ((!btnGardens.classList.contains('service-button-clicked')) && (btnPlanting.classList.contains('service-button-clicked')) && (btnLawn.classList.contains('service-button-clicked'))){
            btnPlanting.classList.remove('service-button-clicked');
            btnLawn.classList.remove('service-button-clicked');
               for (let card of cardGardens) {
                   card.classList.remove('blur');}
               }

     else if (btnGardens.classList.contains('service-button-clicked')){
        btnGardens.classList.remove('service-button-clicked');
        for (let card of cardPlanting) {
            card.classList.remove('blur');}
            for (let card of cardLawn) {
                card.classList.remove('blur');}
     }
    
});


btnLawn.addEventListener('click', function(){
    
    if ((!btnLawn.classList.contains('service-button-clicked')) && (!btnPlanting.classList.contains('service-button-clicked')) && (!btnGardens.classList.contains('service-button-clicked'))){

        btnLawn.classList.add('service-button-clicked');
    for (let card of cardPlanting) {
	card.classList.add('blur');}
    for (let card of cardGardens) {
        card.classList.add('blur');}
    }

    else if ((!btnLawn.classList.contains('service-button-clicked')) && (btnPlanting.classList.contains('service-button-clicked')) && (!btnGardens.classList.contains('service-button-clicked'))){
 btnLawn.classList.add('service-button-clicked');
    for (let card of cardLawn ) {
        card.classList.remove('blur');}
    }

    else if ((!btnLawn.classList.contains('service-button-clicked')) && (!btnPlanting.classList.contains('service-button-clicked')) && (btnGardens.classList.contains('service-button-clicked'))){
        btnLawn.classList.add('service-button-clicked');
           for (let card of cardLawn) {
               card.classList.remove('blur');}
           }

    else if ((!btnLawn.classList.contains('service-button-clicked')) && (btnGardens.classList.contains('service-button-clicked')) && (btnPlanting.classList.contains('service-button-clicked'))){
            btnPlanting.classList.remove('service-button-clicked');
            btnGardens.classList.remove('service-button-clicked');
               for (let card of cardLawn) {
                   card.classList.remove('blur');}
               }

     else if (btnLawn.classList.contains('service-button-clicked')){
        btnLawn.classList.remove('service-button-clicked');
        for (let card of cardPlanting) {
            card.classList.remove('blur');}
            for (let card of cardGardens) {
                card.classList.remove('blur');}
     }
    
});


btnPlanting.addEventListener('click', function(){
    if ((!btnPlanting.classList.contains('service-button-clicked')) && (!btnLawn.classList.contains('service-button-clicked')) && (!btnGardens.classList.contains('service-button-clicked'))){

        btnPlanting.classList.add('service-button-clicked');
    for (let card of cardLawn) {
	card.classList.add('blur');}
    for (let card of cardGardens) {
        card.classList.add('blur');}
    }

    else if ((!btnPlanting.classList.contains('service-button-clicked')) && (btnLawn.classList.contains('service-button-clicked')) && (!btnGardens.classList.contains('service-button-clicked'))){
 btnPlanting.classList.add('service-button-clicked');
    for (let card of cardPlanting ) {
        card.classList.remove('blur');}
    }

    else if ((!btnPlanting.classList.contains('service-button-clicked')) && (!btnLawn.classList.contains('service-button-clicked')) && (btnGardens.classList.contains('service-button-clicked'))){
        btnPlanting.classList.add('service-button-clicked');
           for (let card of cardPlanting) {
               card.classList.remove('blur');}
           }

    else if ((!btnPlanting.classList.contains('service-button-clicked')) && (btnGardens.classList.contains('service-button-clicked')) && (btnLawn.classList.contains('service-button-clicked'))){
            btnLawn.classList.remove('service-button-clicked');
            btnGardens.classList.remove('service-button-clicked');
               for (let card of cardPlanting) {
                   card.classList.remove('blur');}
               }

     else if (btnPlanting.classList.contains('service-button-clicked')){
        btnPlanting.classList.remove('service-button-clicked');
        for (let card of cardLawn) {
            card.classList.remove('blur');}
            for (let card of cardGardens) {
                card.classList.remove('blur');}
     }
    
});

//Prices accordion

const basicPrice = document.getElementById('basics');
const basicText = document.getElementById('basics-text');
const basicDropdown = document.getElementById('dropdown-basics');
basicDropdown.addEventListener('click', function(){
if (!basicPrice.classList.contains("price-open")) {
    basicPrice.classList.add('price-open');
    basicText.classList.add('price-text-open');
    basicDropdown.classList.add('arrow-open')}
    else {
        basicPrice.classList.remove('price-open');
    basicText.classList.remove('price-text-open');
    basicDropdown.classList.remove('arrow-open');
    }
if (standardPrice.classList.contains("price-open") ) {
    standardPrice.classList.remove('price-open');
    standardText.classList.remove('price-text-open');
    standardDropdown.classList.remove('arrow-open')
}
if (procarePrice.classList.contains("price-open") ) {
    procarePrice.classList.remove('price-open');
    procareText.classList.remove('price-text-open');
    procareDropdown.classList.remove('arrow-open')
}

})

const standardPrice = document.getElementById('standard');
const standardText = document.getElementById('standard-text');
const standardDropdown = document.getElementById('dropdown-standard');
standardDropdown.addEventListener('click', function(){
    if (!standardPrice.classList.contains("price-open")) {
            standardPrice.classList.add('price-open');
    standardText.classList.add('price-text-open');
    standardDropdown.classList.add('arrow-open')}
    else {
     standardPrice.classList.remove('price-open');
    standardText.classList.remove('price-text-open');
    standardDropdown.classList.remove('arrow-open');
    }
    if (basicPrice.classList.contains("price-open")) {
        basicPrice.classList.remove('price-open');
        basicText.classList.remove('price-text-open');
        basicDropdown.classList.remove('arrow-open')}
     if (procarePrice.classList.contains("price-open") ) {
            procarePrice.classList.remove('price-open');
            procareText.classList.remove('price-text-open');
            procareDropdown.classList.remove('arrow-open')
        }
})

const procarePrice = document.getElementById('procare');
const procareText = document.getElementById('procare-text');
const procareDropdown = document.getElementById('dropdown-procare');
procareDropdown.addEventListener('click', function(){
    if (!procarePrice.classList.contains("price-open") ) {
        procarePrice.classList.add('price-open');
        procareText.classList.add('price-text-open');
        procareDropdown.classList.add('arrow-open')
    } 
    else {
            procarePrice.classList.remove('price-open');
            procareText.classList.remove('price-text-open');
            procareDropdown.classList.remove('arrow-open')
    }
    if (basicPrice.classList.contains("price-open")) {
        basicPrice.classList.remove('price-open');
        basicText.classList.remove('price-text-open');
        basicDropdown.classList.remove('arrow-open')}

  if (standardPrice.classList.contains("price-open") ) {
            standardPrice.classList.remove('price-open');
            standardText.classList.remove('price-text-open');
            standardDropdown.classList.remove('arrow-open')
        }
})

let order = document.querySelectorAll('.order');
order.forEach(el => el.addEventListener('click', function(){
            window.location ='#contacts'}));

//Sity accordion

