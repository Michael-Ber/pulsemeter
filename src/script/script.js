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
        mobileFirst: true,
	});
	function validateForm(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 3,
					maxlength: 10
				},
				tel: {
					required: true,
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста введите имя",
					minlength: jQuery.validator.format("Введите не менее {0} символов"),
					maxlength: jQuery.validator.format("Введите не более {0} символов")
				},
				tel: "Необходимо ввести номер телефона",
				email: {
					required: "Необходимо ввести почту",
					email: "Неправильно введен адрес почты"
				}
			  }
		});
	}

	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');

	$('input[name=tel]').mask("+7 (999) 999-9999",{placeholder:"_"});
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
			
		});
		return false;
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 1900) {
			$('.scrollUp').fadeIn();
		} else {
			$('.scrollUp').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
});
});