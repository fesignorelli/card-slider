const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30, // Corrigido: substituído ponto e vírgula por vírgula

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2, 
        },
    },
});
