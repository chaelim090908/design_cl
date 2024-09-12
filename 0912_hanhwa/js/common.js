$(document).ready(function(){
    /*
        header .gnb .gnb_wrap .depth1 > li 메뉴에 마우스를 올리면
        1. header에 menu_over 클래스 추가
        2. 마우스를 오버한 li에 on 클래스 추가
        ---> pc에서만 구현
    */
    let win_w
    let pc_mobile
    let scrolling

    function resize_chk(){
        win_w = $(window).width()
        if(win_w > 1024){
            pc_mobile = 'pc'
        }else{
            pc_mobile = 'mobile'
        }
    }
    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    $('header').on('mouseenter focusin', function(){
        if(pc_mobile == 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap .depth1 > li').removeClass('on')
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
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on("click", function(e){
        if(pc_mobile == 'mobile'){
            e.preventDefault();
            $(this).parent().toggleClass('open')
        }
    });

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
   })
   $('header .gnb .gnb_close').on('click', function(){
    $('header').removeClass('menu_open')
    $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
})

