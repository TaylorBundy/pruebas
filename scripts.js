const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

let currentSlide = 0;
let maxSlide = slides.length - 1;
let timer;

function autoSlide() {
  if(currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  // Move slides to the left //
  slides.forEach((slide, index) => {
     slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;

   });
    
  timer = setTimeout(autoSlide, 3000);
}


nextButton.addEventListener('click', () => {

// Reset timeout //
  if (timer) {
    clearTimeout(timer);
  }
  
  autoSlide();
})

prevButton.addEventListener('click', () => {
  if (timer) {
    clearTimeout(timer);
  }
  
  if(currentSlide == 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  // Move slides to the right //
  slides.forEach((slide, index) => {
     slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
   });      
})

autoSlide();