var swiper1 = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 30,
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
    slidesPerView: 2,
    spaceBetween: 30,
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