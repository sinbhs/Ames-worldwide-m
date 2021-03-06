$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //hamburger menu
    $('.menu_wrapper').on('click', function() {
        $('.hamburger_menu').toggleClass('animate');//햄버거 메뉴 모양
        $('.nav').toggleClass('animate');//햄버거 메뉴 투명도 조절
        $('.nav').animate({left:0},200);//햄버거 메뉴 왼쪽에서 오른쪽으로 등장

        const menu = $('.hamburger_menu').hasClass('animate');//열린 상태 정의
        if(menu == 0) {
            $('.nav').animate({left:'-100%'},200);
        }
    });

    //vegas plugin
    $('.imgBox').vegas({
        slides : [
            {src: 'images/banner.jpg'},
            {src: 'images/banner2.jpg'},
            {src: 'images/banner3.jpg'}
        ],
        timer : false,//하단 진행바 숨김
        delay:2000,//대기시간
        transition: 'fade',//움직임의 형태
        valign: 'top'
    });

    //marquee text
    let marquee = document.querySelectorAll('.clipped-text');
    // 너비를 얻기 위한 이벤트 수신기
    addEventListener("load", function () {
        marquee.forEach(el => {
        // 값이 높을수록 속도가 빠름
        let rate = 200;
        // 요소의 너비 가져오기
        let distance = el.clientWidth;
        // 요소의 오른쪽 여백 가져오기
        let style = window.getComputedStyle(el);
        let marginRight = parseInt(style.marginRight) || 0;
        // 요소의 전체 너비 가져오기
        let totalDistance = distance + marginRight;
        // 애니메이션 지속 시간
        let time = totalDistance / rate;
        // 요소의 상위 항목 가져오기
        let container = el.parentElement;

        gsap.to(container, time, {
        repeat: -1,
        x: '-'+totalDistance,
        ease: Linear.easeNone,
        });
        });
    });

    //event swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto'
      });

    //product swiper
    var swiper = new Swiper('.pd-container', {
        slidesPerView: 1,
        loop:true,
        autoplay:{
            delay:1500,
        },
        speed:800
    });

    //model look swiper
    var swiper = new Swiper('.look-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });

    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},300);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });
});