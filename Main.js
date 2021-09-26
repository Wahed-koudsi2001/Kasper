// Toggle-Menu
let toggleMenu = document.getElementById('toggle-menu');

let unorderList = document.getElementById('unorder-list');

toggleMenu.onclick = function () {
    unorderList.classList.toggle('open');
}


// Activaty Links On Banbar
let unorderLi = document.querySelectorAll('#unorder-list li a');
unorderLi.forEach((li) => {
    li.addEventListener('click', addActive)
})

function addActive() {
    unorderLi.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    })
}

// Slide Imgs
let containerImgs = Array.from(document.querySelectorAll('.container-img img'));

let bulletsLi = Array.from(document.querySelectorAll('.bulletsSlide li'));

let currentSlide = 1;

let slideCount = containerImgs.length;

let prevBtn = document.getElementById('prev');

let nextBtn = document.getElementById('next');

prevBtn.onclick = prevSlide;

nextBtn.onclick = nextSlide;

function prevSlide() {
    if (currentSlide == 1) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function nextSlide() {
    if (currentSlide == slideCount) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}
for (let i = 0; i < bulletsLi.length; i++) {
    bulletsLi[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function theChecker() {

    removeAllActive();

    containerImgs[currentSlide - 1].classList.add('active');

    bulletsLi[currentSlide - 1].classList.add('active');

}

function removeAllActive() {
    containerImgs.forEach((img) => {
        img.classList.remove('active');
    })
    bulletsLi.forEach((li) => {
        li.classList.remove('active');
    })
}

// Shufling Imgs 

let imgs = document.querySelectorAll('.imgs-container .box');

let shuffleLi = document.querySelectorAll('.shuffle li');

shuffleLi.forEach((li) => {
    li.addEventListener('click', activeLi);
    li.addEventListener('click', filterImgs);
})


function activeLi() {
    shuffleLi.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    })
}

function filterImgs() {
    imgs.forEach((img) => {
        img.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.img).forEach((el) => {
        el.style.display = 'block';
    })
}

// See More Img

let moreImgs = document.getElementById('moreImgs');

let block = document.querySelector('#imgs-container #block');

moreImgs.onclick = function () {

    block.style.display = 'flex';

    moreImgs.style.display = 'none';
}

// Buy Now

// Get Open Modal Button
let modalBtn = document.querySelector('.plans #open');

// Get The Modal Element
let modal = document.getElementById("modal");

// Get Close Button
let closeBtn = document.getElementById('colseBtn');

// openModal Funtion
modalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
// close Modal 
modal.addEventListener('click', function () {
    modal.style.display = 'none';
});
// outSide Function
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = 'block';
    }
});


// Scroll
let header = document.getElementById('header');

let upBtn = document.querySelector('.up');

let progBar = document.getElementById('progBar');

let progBar2 = document.getElementById('progBar-2');

let progBar3 = document.getElementById('progBar-3');

let progBar4 = document.getElementById('progBar-4');


window.onscroll = function () {
    this.scrollY >= 600 ? upBtn.classList.add('show') : upBtn.classList.remove('show');

    this.scrollY >= 600 ? header.classList.add('show') : header.classList.remove('show');

    this.scrollY >= 5000 ? progBar.classList.add('width') : progBar.classList.remove('width');

    this.scrollY >= 5000 ? progBar2.classList.add('width') : progBar2.classList.remove('width');

    this.scrollY >= 5000 ? progBar3.classList.add('width') : progBar3.classList.remove('width');

    this.scrollY >= 5000 ? progBar4.classList.add('width') : progBar4.classList.remove('width');

}
upBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// Digital Clock
let hour = document.getElementById('hour');

let minutes = document.getElementById('minutes');

let seconde = document.getElementById('seconds');

let millSeconds = document.getElementById('mill-seconds');


setInterval(function time() {
    let data_now = new Date();
    let hr = data_now.getHours();
    let min = data_now.getMinutes();
    let sec = data_now.getSeconds();


    if (hr < 10) {
        hr = `0 ${hr}`;
    }
    if (min < 10) {
        min = `0 ${min}`;
    }
    if (sec < 10) {
        sec = `0 ${sec}`;
    }

    hour.textContent = hr;
    minutes.textContent = min;
    seconde.textContent = sec;

}, 1000);
