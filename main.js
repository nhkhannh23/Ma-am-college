// document.addEventListener('DOMContentLoaded', () => {
//     const swiper = new Swiper('.swiper', {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         loop: true, // Makes the slider loop infinitely
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('mobile-menu');
    var navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});




/*=============== SWIPER JS ===============*/
// let swiperCards = new Swiper(".card__content", {
//     loop: true,
//     spaceBetween: 32,
//     grabCursor: true,
  
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
  
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
  
//     breakpoints:{
//       600: {
//         slidesPerView: 2,
//       },
//       968: {
//         slidesPerView: 3,
//       },
//     },
//   });
  
  let swiperCards = new Swiper(".card__content", {
    loop: true, // Enables infinite loop mode
    spaceBetween: 32, // Space between slides
    grabCursor: true, // Shows a grab cursor when hovering over slides

    slidesPerView: 2, // Display two cards at a time

    autoplay: {
        delay: 3000, // Move to the next slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay even after user interaction
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 2, // Ensure two cards are shown on smaller devices
        },
        968: {
            slidesPerView: 2, // Still two cards on medium to large devices
        },
    },
});
