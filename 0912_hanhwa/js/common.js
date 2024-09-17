$(document).ready(function(){
    let win_w
    let pc_mobile

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