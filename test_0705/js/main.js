$(document).ready(function(){
    /*
        header .gnb .gnb_wrap ul.depth1 > li 에 마우스를 오버하면 하위메뉴가 나타나게 함

        1. header에 menu_over 클래스 추가
        2. 오버한 메뉴의 li에 on 클래스 추가
        
        this 가 중요한데, li에 on클래스를 줘야함 > li를 오버대상으로 바라봄 
        this 는 on 앞의 선택자를 말함

        --- 메뉴에서 오버는 디테일하게 설정하고, 아웃은 넓직하게 header로 잡는 것이 좋음
    */

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        $('header').addClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
    /* 1차메뉴 li 중 마지막 li의 2차 메뉴 li 중 마지막 li */
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
    })
})