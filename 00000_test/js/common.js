$(document).ready(function(){
    let win_w
    let pc_mobile

    function resize_chk(){
        win_w = $(window).width()
            if(win_w > 1199){
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
            $('header .right .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })

    $('header').on('mouseleave', function(){
        if(pc_mobile == 'pc'){
            $('header').removeClass('menu_over')
            $('header .right .gnb ul.depth1 > li').removeClass('on')
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
        footer .family .family_open을 클릭하면
        1. footer .family 에 open 클래스 추가
        2. footer .family ul 을 열어줌

        footer .family_site .family_close 를 클릭하면
        1. footer .family 에 open 클래스 삭제
        2. footer .family ul 을 닫음
    */
        $('footer .family .family_open').on('click', function(){
            $('footer .family').addClass('open')
            $('footer .family ul').slideDown()
        })
        $('footer .family_close').on('click', function(){
            $('footer .family').removeClass('open')
            $('footer .family ul').slideUp()
        })
})