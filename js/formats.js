const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
       480: {
            slidesPerView: 1,
        },
      
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        }
    },
    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button'
    },
    navigation: {
        nextEl: '.carousel-button.next',
        prevEl: '.carousel-button',
    },
});