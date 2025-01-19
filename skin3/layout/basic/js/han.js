$(function() {

    // 헤더픽스
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('fix');
            $('#quick.quick').addClass('show');
        } else {
            $('#header').removeClass('fix');
            $('#quick.quick').removeClass('show');
        }
    });

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

    // 정렬방식
    $('#type').change(function() {
        // 선택한 페이지로 이동
        location.href = $(this).val();
    });

    // 페이지가 로드되었을 때 스크롤 위치 복원
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        $(window).on('load', function() {
            $(window).scrollTop(scrollPosition);
            sessionStorage.removeItem('scrollPosition');
        });
    }

    // 기존 정렬 방법 처리 (정렬 URL 파라미터 처리)
    var sSortName = new URLSearchParams(window.location.search).get('sort_method');
    if (sSortName) {
        if (!sSortName.includes('#Product_ListMenu')) {
            sSortName += '#Product_ListMenu';
        }
        $('#type > option').each(function() {
            if ($(this).val().includes(sSortName)) {
                $(this).prop('selected', true);
            }
        });
    }

    // 로그인폼 placeholder 추가
    if ($('.xans-member-login').length) {
        var login_id_type_text = $('#member_id').parent().attr('title');
        $('#member_id').attr('placeholder', login_id_type_text);
        $('#member_passwd').attr('placeholder', '비밀번호');
    }

    // 키보드 미리보기
    $('.keyboard button').on('click', function() {
        if ($(this).hasClass('selected')) {
            $('.keyboard .btnKey').removeClass('selected');
            $('.view div').hide();
        } else {
            $('.keyboard .btnKey').removeClass('selected');
            $('.view div').hide();
            $(this).addClass('selected');
            var key = $(this).attr('title');
            $(this).parent().next().children('.' + key).show();
        }
    });

    // 회원&비회원 토글
    $('body').on('click', '.ec-base-tab a', function(e) {
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


    // 메인페이지 팝업 유무에 따라 딤처리
    var repeat = setInterval(function() {
        if ($('.app-smart-popup').length > 0) {
            clearInterval(repeat);

            if ($('.app-smart-popup').length > 0) {
                // 팝업이 없다면
                $('body').addClass('nodeep');
            } else {
                $('body').removeClass('nodeep');
            }
        }
    })
    $('body').on('click', ".smart-popup-btns button.smart-popup-close", function() {
        $('body').removeClass('nodeep');
    })

});


document.addEventListener("DOMContentLoaded", function() {
    // 로그인 탭
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

    // 빠른 로그인 사용 여부
    var dfLogin = document.querySelector(".df-login");
    var kakaoItem = document.querySelector(".df-login-sns-item_kakao.displaynone");
    var naverItem = document.querySelector(".df-login-sns-item_naver.displaynone");

    if (kakaoItem && naverItem) {
        dfLogin.classList.add("df-login_general");
    }

    // placeholder (모바일 전용)
    var memberLogin = document.querySelector('.df-native-mobile .xans-member-login');
    if (memberLogin) {
        var loginId = document.querySelector('#member_id').parentNode.getAttribute('title');
        document.querySelector('#member_id').setAttribute('placeholder', loginId);

        var memberPasswd = document.querySelector(':lang(ko) #member_passwd');
        if (memberPasswd) {
            memberPasswd.setAttribute('placeholder', '비밀번호');
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

    // captcha 이미지 업데이트
    var captchaRow = document.querySelector('tr.captcha');
    if (captchaRow) {
        var images = captchaRow.querySelectorAll('td img');
        if (images.length > 1) {
            var secondImage = images[1];
            secondImage.src = '/img/icon/Refresh.svg';  // 원하는 URL을 넣으세요.
        }
    }

    // 메인 배너 텍스트 효과
    const textWave = document.querySelector(".startUp");
    if (textWave) {
        textWave.innerHTML = textWave.textContent
            .split("")
            .map((letter, idx) => {
                if (letter === " ") return " ";
                return `<span style="animation-delay:${idx * 30}ms" class="letter">${letter}</span>`;
            })
            .join("");
    }
    
});
