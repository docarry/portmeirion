$(function() {
    // 탭 버튼 클릭 시
    $('.tab-btn').on('click', function() {
        var tabId = $(this).data('tab'); // 클릭한 탭의 ID 가져오기
        
        // 모든 탭 버튼과 내용 숨기기
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');

        // 클릭한 탭 버튼 활성화 및 해당 탭 내용 표시
        $(this).addClass('active');
        $('#tab-' + tabId.charAt(tabId.length - 1)).addClass('active'); // tab1, tab2, ... 에 맞춰 ID 설정
    });

    // 헤더픽스
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
            $('#quick').addClass('show');
        }else{
            $('#header').removeClass('fix');
            $('#quick').removeClass('show');
        }
    });

    // 포트메리온 스토리 회사소개로 이동
    $(document).on('click', '#header .main-category-list > li:first-child > a', function() {
        $(this).attr("href", "https://soodesignshop.cafe24.com/shopinfo/company.html");
    });

    $('#type').change(function() {
        // 선택한 페이지로 이동
        location.href = $(this).val();
    });

    // 페이지가 로드되었을 때 스크롤 위치 복원
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        // 페이지 로딩 후 스크롤 위치가 저장되어 있으면 해당 위치로 이동
        $(window).on('load', function() {
            $(window).scrollTop(scrollPosition);
            // 스크롤 위치 복원 후 sessionStorage에서 해당 값을 제거
            sessionStorage.removeItem('scrollPosition');
        });
    }
    
    // 기존 정렬 방법 처리
    var sSortName = CAPP_SHOP_FRONT_COMMON_UTIL.getParameterByName('sort_method');

    if (sSortName !== '') {

        if (sSortName.indexOf('#Product_ListMenu') < 0) {
            sSortName = sSortName + '#Product_ListMenu';
        }

        $('#type>option').each(function() {
            if ($(this).val().indexOf(sSortName) > 0) {
                $(this).prop('selected', true);
            }
        });
    }
});


// 메인배너 스와이퍼 슬라이드 시작 //////////
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
// 메인배너 스와이퍼 슬라이드 종료 //////////


// Popular Collections 스와이퍼 슬라이드 시작 //////////
var popular = new Swiper("#popular .popular-wrap", {
    slidesPerView: 3,
    slidesPerGroup : 3,
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
// Popular Collections 스와이퍼 슬라이드 종료 //////////


// Favorite Categories 스와이퍼 슬라이드 시작 //////////
var categories = new Swiper("#categories-slide", {
    slidesPerView: 3,
    spaceBetween: 40,
});
// Favorite Categories 스와이퍼 슬라이드 종료 //////////