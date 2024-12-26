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
    // 공지사항으로 이동
    $(document).on('click', '#header .sub-category-list:nth-child(2) > li:first-child > a', function() {
        $(this).attr("href", "https://soodesignshop.cafe24.com/board/free/list.html?board_no=1");
    });
    // 이벤트로 이동
    $(document).on('click', '#header .sub-category-list:nth-child(2) > li:nth-child(2) > a', function() {
        $(this).attr("href", "https://soodesignshop.cafe24.com/board/gallery/list.html");
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

    // jQuery(".xans-product-detail .imgArea .listImg >ul >li").click(function(){
	// 	jQuery(this).addClass('on').siblings().removeClass('on');
	// })

    //로그인폼 placeholder 추가
if ($('.xans-member-login').val() != undefined) {
    var login_id_type_text = $('#member_id').parent().attr('title');
    $('#member_id').attr('placeholder', login_id_type_text);
    $('#member_passwd').attr('placeholder', '패스워드');
}

//키보드 미리보기
$('.keyboard button').on('click', function(){
    if($(this).hasClass('selected')==true){
        $('.keyboard .btnKey').removeClass('selected');
        $('.view div').hide();
    }
    else{
        $('.keyboard .btnKey').removeClass('selected');
        $('.view div').hide();
        $(this).addClass('selected');
        var key=$(this).attr('title');
        $(this).parent().next().children('.'+key+'').show();
    }
});

// 회원&비회원 토글
$('.ec-base-tab').each(function(){
    var selected = $(this).find('> ul > li.selected > a');
});

$('body').on('click', '.ec-base-tab a', function(e){
var _target = $(this).attr('href');
    if (_target == '#member') {
        $('#member_login_module_id').show();
        $('#order_history_nologin_id').hide();
    } else {
        $('#member_login_module_id').hide();
        $('#order_history_nologin_id').show();
    }
    e.preventDefault();
});
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



document.addEventListener("DOMContentLoaded", function() {
    //로그인 탭
    if (location.href.includes("guestlogin")) {
        document.querySelectorAll(".df-login-member").forEach(function(element) {
            element.style.display = "none";
        });
		
        document.querySelectorAll(".df-login-guest").forEach(function(element) {
            element.style.display = "block";
        });		

        document.querySelectorAll(".df-login-tab-item_member").forEach(function(element) {
            element.classList.remove("df-login-tab-item_active");
        });

        document.querySelector(".df-login-tab-item_guest").classList.add("df-login-tab-item_active");
        document.querySelector(".df-login-guest").classList.add("df-login-guest_active");
    }

    document.querySelectorAll(".df-login").forEach(function(element) {
        element.classList.remove("df-login-ready");
    });
    //빠른로그인 사용여부
    var dfLogin = document.querySelector(".df-login");
    var kakaoItem = document.querySelector(".df-login-sns-item_kakao.displaynone");
    var naverItem = document.querySelector(".df-login-sns-item_naver.displaynone");

    if (kakaoItem && naverItem) {
        dfLogin.classList.add("df-login_general");
    }
	//placeholder(모바일전용)
    var memberLogin = document.querySelector('.df-native-mobile .xans-member-login');
    if (memberLogin !== null) {
        var loginId = document.querySelector('#member_id').parentNode.getAttribute('title');
        document.querySelector('#member_id').setAttribute('placeholder', loginId);
        
        var memberPasswd = document.querySelector(':lang(ko) #member_passwd');
        if (memberPasswd !== null) {
            memberPasswd.setAttribute('placeholder', '패스워드');
        } else if ((memberPasswd = document.querySelector(':lang(en) #member_passwd')) !== null) {
            memberPasswd.setAttribute('placeholder', 'Password');
        } else if ((memberPasswd = document.querySelector(':lang(zh) #member_passwd')) !== null) {
            memberPasswd.setAttribute('placeholder', '密码');
        } else if ((memberPasswd = document.querySelector(':lang(ja) #member_passwd')) !== null) {
            memberPasswd.setAttribute('placeholder', 'パスワード');
        } else if ((memberPasswd = document.querySelector(':lang(zh-tw) #member_passwd')) !== null) {
            memberPasswd.setAttribute('placeholder', '密碼');
        } else if ((memberPasswd = document.querySelector(':lang(vi) #member_passwd')) !== null) {
            memberPasswd.setAttribute('placeholder', 'Mật khẩu');
        }
    }
});