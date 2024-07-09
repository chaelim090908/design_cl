$(document).ready(function(){
    /*
        1025px 이상 - pc
        1024px 이하 - mobile
    */
    let pc_mobile //현재 pc인지 mobile인지 상태를 저장하는 변수
    let window_w // 브라우저의 넓이 (브라우저의 넓이에 따라 pc, mobile을 결정할 것이라서)

    function resize_chk(){
        /* 사이즈가 변환되는 것을 check하는 것 */
        window_w = $(window).width()
        if(window_w > 1024){ // 1025 이상 - pc버전
            pc_mobile = 'pc'
        }else{ // 위의 값이 아니면 mobile 버전
            pc_mobile = 'mobile'
        }
        console.log(pc_mobile)
    }

    resize_chk() // html이 로딩된 이후 단 1번 실행
    $(window).resize(function(){ // 브라우저가 리사이즈 될 때마다 실행
        resize_chk()
    })

    /*
        pc에서 메뉴에 마우스를 오버하면,
        1. header에 menu_over 클래스 추가
        2. 오버한 li에 (header .gnb .gnb_wrap ul.depth1 > li)만 on 클래스 추가
    */

        $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
            /* pc일 때만 작동되어야 함
               주의사항 - 반드시 on 클래스가 들어가야 함
                          on이라는 명령은 이벤트핸들러(감시)로 pc에서만 작동(감시)되게 못함
                          pc, mobile 상관 없이 무조건 작동됨
                          > 이벤트가 발생했을 때 작동되는 실행문에 if문을 걸어서 pc일 때만 실행되도록 해야 함 */
            if(pc_mobile == 'pc'){ // 반드시 = 2개 사용('같다'는 의미), else 없음
                $('header').addClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
                $(this).addClass('on') // ul.depth1 > li 자신
            } //if
        })//on
        $('header').on('mouseleave', function(){
           if(pc_mobile == 'pc'){ // 반드시 = 2개 사용('같다'는 의미), else 없음
                $('header').removeClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            } //if
        })//on
        $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
            /* 1차 메뉴 li 중 마지막 li의 하위메뉴 li 중 마지막 li (회사연혁) */
            if(pc_mobile == 'pc'){
                $('header').removeClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            } //if
        })

    /*
        모바일에서 1차 메뉴를 클릭하면
            - 1차 메뉴에 걸려있는 링크가 작동되면 X
            - 하위메뉴가 열려있어야 함 (li에 open 클래스 추가)
              > 닫힌 1차 메뉴를 클릭하면 열리고, 열린 1차 메뉴를 클릭하면 닫힘
                (동시에 여러개의 1차메뉴가 열릴 수 있음)

            반드시 a 태그에 줘야함
    */  

    $(" header .gnb .gnb_wrap ul.depth1 > li > a").on("click", function(e){
        // 모바일일 때 a 태그를 클릭하면 href 값으로 이동하는 것을 멈춤
        if(pc_mobile == 'mobile'){
            e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
            // this = 당장 클릭한 a 값
            $(this).parent().toggleClass('open') /*클래스가 없으면 추가하고, 있으면 삭제*/
        }
    });

    /*
        메뉴 열기를 클릭하면 header에 menu_open 클래스 추가
        = 메뉴 닫기를 클릭하면 header에 menu_open 클래스 삭제
        header.menu_open .gnb .gnb_open - 메뉴열기
        header.menu_open .gnb .gnb_close - 메뉴닫기
    */

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })

    
})