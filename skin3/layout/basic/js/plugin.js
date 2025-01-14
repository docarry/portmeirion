// AOS 애니메이트 플러그인
AOS.init({
    once: true,});


// 메인배너 스와이퍼 슬라이드
var mainBanner = new Swiper("#main-banner", {
    loop: true,
    pagination: {
        el: "#main-banner .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// Popular Collections 스와이퍼 슬라이드
var popular = new Swiper("#popular .popular-wrap", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: -60,
    loop: true,
    pagination: {
        el: "#popular .popular-wrap .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '#popular .popular-wrap .swiper-button-next',
        prevEl: '#popular .popular-wrap .swiper-button-prev',
    },
});

// Favorite Categories 스와이퍼 슬라이드
var categories = new Swiper("#categories-slide", {
    slidesPerView: 3,
    spaceBetween: 40,
});


var makingSwiper01 = new Swiper("#makingBox01.mySwiper", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
    speed: 6000
});
var makingSwiper02 = new Swiper("#makingBox02.mySwiper", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    speed: 6000,
});