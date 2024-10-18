var swiper = new Swiper(".MySwiper", {
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

const slides = document.querySelectorAll('.swiper-slide');
let index = 0;

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

const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

const buttonPressed = e => { 
  result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}

//var arr = [];
//function myFunction() {
  //var anchors = document.getElementsByTagName("img");
  //for(var i = 0; i < anchors.length; i++){
   //arr.push(anchors[i].text);
  //}
//}

//console.log(arr);