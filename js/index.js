var swiper1 = new Swiper('.mySwiper', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1339: {
            slidesPerView: 0,
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
            spaceBetween: 0
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 26,
            allowTouchMove: true,
            allowSlideNext: true,
            allowSlidePrev: true,
            enabled: true,
        },
        1339: {
            slidesPerView: 0,
            spaceBetween: 0,
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


!function (e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector ||
        function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }),
        "function" != typeof e.closest && (e.closest = function (e) {
            for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode }
            return null
        })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });

    });

    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

});
