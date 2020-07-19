//Modal windows in native JS 

// window.addEventListener('DOMContentLoaded', () => {
//     const callBtn = document.querySelectorAll('[data-modal=consultation]'),
//           buyBtn = document.querySelectorAll('.button_mini'),
//           overlay = document.querySelector('.overlay'),
//           consultation = document.querySelector('#consultation'),
//           closeModal = document.querySelectorAll('.modal__close'),
//           order = document.querySelector('#order'),
//           modalDescr = document.querySelectorAll('.modal__descr'),
//           cardDescr = document.querySelectorAll('.catalog-card__subtitle');
    
//     console.log(callBtn);
    
//     callBtn.forEach(btn => {
//         btn.addEventListener('click', () => {
//             overlay.style.display = 'block';
//             overlay.classList.add('fade');
//             consultation.style.display = 'block';
//         });
//     });

//     buyBtn.forEach((btn, index) => {
//         btn.addEventListener('click', () => {
//             overlay.style.display = 'block';
//             overlay.classList.add('fade');
//             order.style.display = 'block';
//             modalDescr.forEach(item => {
//                 item.textContent = cardDescr[index].textContent;
//             });
//         });
//     });

//     closeModal.forEach(close => {
//         close.addEventListener('click', () => {
//             overlay.style.display = 'none';
//             consultation.style.display = 'none';
//             order.style.display = 'none';
//             overlay.classList.remove('fade');
//         });
//     });

// });


//Modal windows in jQuery

$(document).ready(function() {
    $('[data-modal=consultation]').on('click', () => {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', () => {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', () => {
            $('#order .modal__descr').text($('.catalog-card__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    

});