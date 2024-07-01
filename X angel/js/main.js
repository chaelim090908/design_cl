$(document).ready(function(){

    /* mobile_open 메뉴 (나중에 확인하기) */

    /* 브라우저 넓이가 1024 이하 > 모바일 / 이상 > pc */
   let pc_mobile //현재 상태가 pc인지 mobile인지를 저장할 변수
   let window_w // 브라우저 넓이 저장

   function ressize_chk(){
    window_w = $(window).window()
    if(window_w > 1024){/* 1024보다 크면 - pc면 */
        pc_mobile = 'pc'
    }else{/* mobile이면 */
        pc_mobile = 'mobile'
    }
    console.log(pc_mobile)
   }
   /* 처음에 로딩 됐을 때 실행 */
   ressize_chk()
   /* 브라우저가 리사이즈 될 때마다 실행 */
   $(window).resize(function(){
         ressize_chk()
   })










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

   /*
        시점(언제 실행할 것인지)이 정말 중요함

        메뉴에 마우스를 올리면
        header에 menu_over라는 클래스를 추가
        마우스를 오버한 li에만 on이라는 클래스를 추가
        메뉴 : header .gnb . gnb_wrap ul.depth1 > li

        --> 다른 메뉴(li)에 마우스를 오버하면 이전에 오버했던 메뉴의 on 클래스 삭제
        --> header에서 마우스를 아웃하면 그 때 menu_over 클래스 삭제
            모든 메뉴에서 on클래스 삭제
            (이전에 오버했던 메뉴를 알기 어려움)
            ==> 모든 메뉴의 on클래스를 삭제했다가 오버한 내 것만 on 클래스 추가
        --> header에서 마우스를 아웃하면 그 때 menu_over라는 클래스 삭제
            모든 메뉴에서 on클래스 삭제
   */

   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(pc_mobile == 'pc'){ // pc일 경우에만
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
            $(this).addClass('on') /* 마우스를 오버한 li만 */
        }     
   })
        if(pc_mobile == 'pc'){
            $('header').on('mouseleave', function(){
                $('header').removeClass('menu_over')
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('on')
               })
        }


        $('header .gnb .gnb_open').on('click', function(){
            if(pc_mobile == 'mobile'){ /* 모바일일 때 */
                $('header').addClass('mobile_open')
            }
        })
        $('header .gnb .gnb_close').on('click', function(){
            if(pc_mobile == 'mobile'){ /* 모바일일 때 */
                $('header').removeClassClass('mobile_open')
            }
        })

   



}) //document