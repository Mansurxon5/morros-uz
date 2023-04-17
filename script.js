'use strict';

const menu = document.getElementById('menu'),
    chevron = document.getElementById('chevron'),
    body = document.querySelector('body'),
    boxxing = document.querySelector('.boxxing'),
    crush = document.querySelector('.crush'),
    bagShop = document.getElementById('bag-shop'),
    bagShopping = document.getElementById('bag-shopping'),
    href = document.querySelectorAll('.item a'),
    menuContainer = document.querySelector('.menu-container'),
    image = document.getElementById('bars');

image.addEventListener('click', () => {
    menu.classList.toggle('active');
    body.style.overflow = "hidden";
    menuContainer.classList.toggle('const')
});

chevron.onclick = () => {
    
    menu.classList.toggle('active');
    body.style.overflowY = "scroll";
    menuContainer.classList.toggle('const')
};

href.forEach(function (aHref) {
    aHref.addEventListener('click', () => {
        document.querySelector('a.href').classList.remove('href')
        aHref.classList.toggle('href');
        if (aHref.id === 'hrefOne') {
            heading.innerHTML = "Исключительное качество без компромиссов";
            par.innerHTML = "Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства";
            boxxing.style.backgroundImage = "url('/image/boxxing\ background\ image.png')";
        } else if (aHref.id === 'hrefTwo') {
            heading.innerHTML = "Дом и Ножи";
            par.innerHTML = "Эксклюзивные технологии на страже чистоты и уюта в вашем доме"
            boxxing.style.backgroundImage = "url('/image/bacground\ image\ One.png')";
        } else if (aHref.id === 'hrefThree') {
            heading.innerHTML = "страже чистоты и уюта в вашем".toUpperCase();
            par.innerHTML = "чистоты страж и уюта в вашем доме технологии кулинарного мастерства".toUpperCase()
            boxxing.style.backgroundImage = "url('/image/H0b1c52ff665d44b2a5ae6767ac5374f7j.jpg')";
            // boxxing.style.backgroundSize = "cover"
        } else if (aHref.id === 'hrefFour') {
            heading.innerHTML = "кулинарного  в вашем доме технологии кулинарного".toUpperCase();
            par.innerHTML = "технологии кулинарного  в вашем доме  мастерства чистоты страж и уюта".toUpperCase()
            // boxxing.classList.add('contain');/image/photo-1610294242471-9d44491f73fe.jfif
            boxxing.style.backgroundImage = "url('/image/photo-1544965838-54ef8406f868.jfif')";
        }
    })
})


let i = 0;

bagShopping.addEventListener("click", function () {
    i++
    bagShop.innerHTML = i;
    console.log(i);
});
