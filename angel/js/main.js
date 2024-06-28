$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {
        effect: "fade",
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
        loop: true,
        navigation: {
            prevEl: '.visual .btn_prev',  
            nextEl: '.visual .btn_next',
        },
    
    });
    
    

    /*
        일시정지 버튼을 클릭하면 팝업은 일시정지가 되고 일시정지 버튼은 숨김처리
        > 다시시작 버튼이 나타남

        다시시작 버튼을 클릭하면 팝업은 재생되고 다시시작 버튼을 숨김처리
        > 일시정지 버튼이 나타남
    */

    /* $('').on('click',) ''사이에 있는 요소가 클릭하면 */
    $('.visual .btn_wrap button.btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap button.btn_play').show()
    })

    $('.visual .btn_wrap button.btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .btn_wrap button.btn_stop').show()
    })
    

}) //document