let leftbar = document.querySelector('#leftbar')
let navbar02 = document.querySelector('.navbar02')
let menu = document.querySelector('#menu')
let navbar01 = document.querySelector('.navbar01')


leftbar.onclick = () => {
    leftbar.classList.toggle('fa-plus-square')
    navbar02.classList.toggle('active')
}

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar01.classList.toggle('active')
}


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active')
        }else{
            reveals[i].classList.remove('active')
        }
    }
}

