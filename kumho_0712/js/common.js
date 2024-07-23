/* header와 footer 공통요소에 들어가는 jquery가 포함 */

$(document).ready(function(){
    /*
        header에 마우스를 올리거나,
        브라우저가 스크롤되면 header에 fixed
        --> pc/mobile 상관없이 언제나 구현

        header .gnb .gnb_wrap .depth1 > li > a
        메뉴에 마우스를 올리면
        1. header에 menu_over 클래스 추가
        2. 마우스를 오버한 li에 on 클래스 추가
        ---> pc에서만 구현
    */

    // let (변수)
    let win_w
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        // 아래 if문
        if(win_w > 1024){ /* 브라우저 사이즈가 1024px 이상이면 */
            pc_mobile = 'pc'
        }else{ /* 아니면 */
            pc_mobile = 'mobile'
        }
    }

    resize_chk() // 브라우저가 로딩되었을 때 단 한번 실행
    $(window).resize(function(){ // 브라우저가 리사이즈 할 때마다 1번 실행
        resize_chk()
    })


    
    
    $('header').on('mouseenter', function(){
        $(this).addClass('fixed')
    })
    $('header').on('mouseleave', function(){
        // 마우스를 아웃했을 때 fixed 클래스를 삭제하는 건 딱 맨 상단에 있을 때만 가능
        if(scrolling <= 0){ // scroll 값이 0과 같거나 작을 때 (※ 0보다 작은 값은 존재하지 않음)
            $(this).removeClass('fixed')
        }
    })

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ // 스크롤이 조금이라도 되었다면
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk()  // 처음에 브라우저가 로딩되었을 때 한번 실행
    $(window).scroll(function(){ // 스크롤 할 때마다 한번 실행
        scroll_chk()
    })

    $('header .gnb .gnb_wrap .depth1 > li').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){ // == -> 같다 / = -> 대입 연산자 ('B'를 A에게 넣음)
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap .depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })


    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap .depth1 > li').removeClass('on')
        }
    })
    $('header .gnb .gnb_wrap .depth1 > li:last-child > ul.depth2 > li:last-child a').on('focusout', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap .depth1 > li').removeClass('on')
        }
    })

    /*
        mobile 메뉴를 클릭하면
        1. a 링크값을 삭제 (이동을 못하게 막아야함)
        2. li에 lpen 클래스 추가
            open 없으면 추가
            open 있으면 삭제
            --> 한번 클릭하면 열리고 두번 클릭하면 닫힘
    */
   $('header .gnb .gnb_wrap ul.depth1 > li > a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault(); /* a 태그의 href를 작동시키지 않음 */
            $(this).parent().toggleClass('open')
        }
    });

    /*
        header .gnb .gnb_open
        메뉴열기를 클릭하면 header에 menu_open 클래스 추가

        header .gnb .gnb_close
        메뉴닫기를 클릭하면 header에 menu_open 삭제
    */
   $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
   })
   $('header .gnb .gnb_close').on('click', function(){
    $('header').removeClass('menu_open')
    $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    /*
        footer .family_site .family_open 을 클릭하면
        1. footer .family_site 에 open 클래스 추가
        2. footer .family_site ul 을 열어줌

        footer .family_site .family_close 를 클릭하면
        1. footer .family_site 에 open 클래스 삭제
        2. footer .family_site ul 을 닫음
    */
    $('footer .family_site .family_open').on('click', function(){
        $('footer .family_site').addClass('open')
        $('footer .family_site ul').slideDown()
    })
    $('footer .family_site .family_close').on('click', function(){
        $('footer .family_site').removeClass('open')
        $('footer .family_site ul').slideUp()
    })

});