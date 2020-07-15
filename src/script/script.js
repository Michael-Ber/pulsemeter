// native js slider

// window.addEventListener('DOMContentLoaded', () => {
//     const sliderWrapper = document.querySelector('.slider__wrapper'),
//           sliderImage = document.querySelectorAll('.slider__img'),
//           leftArrow = document.querySelector('#left'),
//           rightArrow = document.querySelector('#right'),
//           sliderCover = document.querySelector('.slider__cover'),
//           width = window.getComputedStyle(sliderCover).width,
//           sliderImages = document.querySelector('.slider__images');
    
    



//     let offset = 0;
//     sliderImages.style.width = 100*sliderImage.length + '%';

//     function modifyStr(str) {
//         return +str.slice(0, -2);
//     }

//     rightArrow.addEventListener('click', () => {
//         if(offset == (modifyStr(width)*(sliderImage.length-1))) {
//             offset = 0;
//         }else {
//             offset += modifyStr(width);
//         }
//         sliderImages.style.transform = `translateX(-${offset}px)`;
//     });

//     leftArrow.addEventListener('click', () => {
//         if(offset == 0) {
//             offset = modifyStr(width)*(sliderImage.length-1);
//         }else {
//             offset -= modifyStr(width);
//         }
//         sliderImages.style.transform = `translateX(-${offset}px)`;
//     });
// });

//slick slider

$(document).ready(function(){
    $('.slider__inner').slick({
        slidesToShow: 1,
        nextArrow: '<button type="button" class="slick-prev"><img src="img/icons/right.png" alt="right" id="right"></button>',
        prevArrow: '<button type="button" class="slick-next"><img src="img/icons/left.png" alt="left" id="left"></button>',
        speed: 1000,

  });
});