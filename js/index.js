var swiper1 = new Swiper('.mySwiper', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 31,
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 31,
        },
        1339: {
            slidesPerView: 9,
            spaceBetween: 31,
            allowTouchMove: false,
            allowSlideNext: false,
            allowSlidePrev: false,
            enabled: false,
        }
    },
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});

var swiper2 = new Swiper('.Duffeer_swiper', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1339: {
            slidesPerView: 4,
            spaceBetween: 31,
            allowTouchMove: false,
            allowSlideNext: false,
            allowSlidePrev: false,
            enabled: false,
        }
    },
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});