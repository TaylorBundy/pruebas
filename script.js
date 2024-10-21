//import Swiper from 'swiper';
//import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper(".MySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4
        }
    }
});

const slides = document.querySelectorAll('.slide');
let index = 0;
//const next = document.querySelector(".next");
//const prev = document.querySelector(".prev");

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});

/* //button events
next.addEventListener('click', e =>{
    nextSlide();
    if(auto){
    clearInterval(slideInterval)
    slideInterval = setInterval(nextslide, invervalTime);
}
}); */

/* prev.addEventListener('click', e =>{
    prevSlide();
    if(auto){
    clearInterval(slideInterval)
    slideInterval = setInterval(nextslide, invervalTime);
}
}); */

//autoplay
/* if(auto){
    slideInterval = setInterval(nextslide, invervalTime);
} */