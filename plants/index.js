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

const gardens = {
    btn:  document.querySelector('.btn-gardens'),
    cards: document.querySelectorAll('.card-gardens')
}

const planting ={
    btn: document.querySelector('.btn-planting'),
    cards: document.querySelectorAll('.card-planting')
}

const lawn = {
 btn: document.querySelector('.btn-lawn'),
 cards: document.querySelectorAll('.card-lawn')
}

function removeBlur(n) {
    setTimeout(() =>{
        for (let card of n.cards) {
            card.classList.remove('blur');}
        },300)
}

function addBlur(n) {
    setTimeout(() =>{
        for (let card of n.cards) {
            card.classList.add('blur');}
        },300)
}

function onclick(x,y,z){ 
    if ((!x.btn.classList.contains('service-button-clicked')) && (!y.btn.classList.contains('service-button-clicked')) && (!z.btn.classList.contains('service-button-clicked'))){
        x.btn.classList.add('service-button-clicked');
       addBlur(y);
       addBlur(z);
}

    else if ((!x.btn.classList.contains('service-button-clicked')) && (y.btn.classList.contains('service-button-clicked')) && (!z.btn.classList.contains('service-button-clicked'))){
     x.btn.classList.add('service-button-clicked');
     removeBlur(x);
        }

    else if ((!x.btn.classList.contains('service-button-clicked')) && (!y.btn.classList.contains('service-button-clicked')) && (z.btn.classList.contains('service-button-clicked'))){
         x.btn.classList.add('service-button-clicked');
         removeBlur(x);
    }
            
    else if ((!x.btn.classList.contains('service-button-clicked')) && (y.btn.classList.contains('service-button-clicked')) && (z.btn.classList.contains('service-button-clicked'))){
        y.btn.classList.remove('service-button-clicked');
        z.btn.classList.remove('service-button-clicked');
        removeBlur(x);
         }

     else if (x.btn.classList.contains('service-button-clicked')){
    x.btn.classList.remove('service-button-clicked');
    removeBlur(y);
    removeBlur(z);             
                 }
}


gardens.btn.addEventListener('click', function(){
    onclick(gardens, lawn, planting)  ;

});

lawn.btn.addEventListener('click', function(){
    onclick(lawn, gardens, planting)  ;

});

planting.btn.addEventListener('click', function(){
    onclick(planting, lawn, gardens)  ;

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

//City accordion

const citySelect = document.querySelector('.city-btn');
const cityOptions =  document.querySelector('.city-options');
const drop =  document.getElementById('drop-city');
const address = document.querySelectorAll('.address');

citySelect.addEventListener('click', function(){
cityOptions.classList.toggle('city-options-open');
citySelect.classList.add('city-btn-open');
drop.classList.toggle('dropdown-city-open');
for (let adcity of address) {
if ( adcity.classList.contains('address-open')){
    adcity.classList.remove('address-open');}
}
});

const canandaigua = document.getElementById('canandaigua');
const newyork =  document.getElementById('newyork');
const yonkers =  document.getElementById('yonkers');
const sherrill =  document.getElementById('sherrill');
const city = document.getElementById('city');
const sherrillAddress =  document.getElementById('sherrill-address');
const newyorkAddress =  document.getElementById('newyork-address');
const canandaiguaAddress =  document.getElementById('canandaigua-address');
const yonkersAddress =  document.getElementById('yonkers-address');

canandaigua.addEventListener('click', function(){
    setTimeout(() =>{
    cityOptions.classList.remove('city-options-open');
    city.textContent ='Canandaigua, NY';
    drop.classList.remove('dropdown-city-open');
    canandaiguaAddress.classList.add('address-open');
    },300);
});
newyork.addEventListener('click', function(){
    setTimeout(() =>{
    cityOptions.classList.remove('city-options-open');
    city.textContent ='New York City';
    drop.classList.remove('dropdown-city-open');
    newyorkAddress.classList.add('address-open');
},300);
});

yonkers.addEventListener('click', function(){
    setTimeout(() =>{
    cityOptions.classList.remove('city-options-open');
    city.textContent ='Yonkers, NY';
    drop.classList.remove('dropdown-city-open');
    yonkersAddress.classList.add('address-open');
},300);
});

sherrill.addEventListener('click', function(){
    setTimeout(() =>{
    cityOptions.classList.remove('city-options-open');
    city.textContent ='Sherrill, NY';
    drop.classList.remove('dropdown-city-open');
    sherrillAddress.classList.add('address-open');
},300);
});

const yonkersCall = document.getElementById('call-yonkers');
const newyorkCall = document.getElementById('call-newyork');
const sherrillCall = document.getElementById('call-sherrill');
const canandaiguaCall = document.getElementById('call-canandaigua');

yonkersCall.addEventListener('click', function(){
    window.open('tel:+19146780003');
})
sherrillCall.addEventListener('click', function(){
    window.open('tel:+13159080004');
})
newyorkCall.addEventListener('click', function(){
    window.open('tel:+12124560002');
})
canandaiguaCall.addEventListener('click', function(){
    window.open('tel:+15853930001');
})

