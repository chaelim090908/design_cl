$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', {
        effect: "fade",
        autoplay: {
            delay: 100000,
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
    
    /*
        페이지가 스크롤되면 header에 fixed 클래스를 추가
        다시 맨 위로 올라가면 header에 fixed 클래스를 삭제
    */
   let scrolling
   
   function scroll_chk(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
   } //function

   // 문서가 처음 로딩되었을 때 1번 실행
   scroll_chk()

   $(window).scroll(function(){
        // 브라우저를 스크롤 할 때마다 실행
        scroll_chk()
   })

}) //document