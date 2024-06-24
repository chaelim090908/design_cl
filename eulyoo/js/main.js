/* 마우스 오버했을 때 애니메이션 > 변경될 애니메이션을 css Class에서 설정해야 함 */


$(document).ready(function(){ /* document가 ready(로딩)된 이후 */

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    }); //.visual .swiper

    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                slidesPerView: "auto",
                spaceBetween: 24, /* 사이 여백 */ 
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    }); /* book_swiper */

    /*
        스크롤을 내리면 header의 fixed 클래스를 추가
        스크롤이 맨 위에 있을 때는 fixed 클래스 삭제
                조금이라도 내려오면 fixed 클래스 추가

        "브라우저가 스크롤 된 정도를 체크하는 값"
        - $(window).scrollTop() => 맨 위 0
        스크롤을 내리면 상단에서부터 스크롤 한 만큼 출력

        $(window).scrollTop()가 0이면 fixed 삭제
                                0보다 크면 fixed 추가
    */
    $(window).scroll(function(){ /* 브라우저가 스크롤 될 때마다 실행 */
        $(window).scrollTop()
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed')
            /* 상응하는 값이면 header에 fixed 클래스 추가 */
        }else{ //그 외 전부 (0일 때)
            $('header').removeClass('fixed')
            /* 상응하는 값이면 header에 fixed 클래스 삭제 */
        }//if
    }) //scroll

    /* 
        .interview .list ul li 태그에 오버한 li에만 on클래스를 주고
        나머지 다른(이전에 오버한) li에는 on크래스를 삭제
        ---> 이전에 오버했던 li를 선택하는 명령 X
             모든 li의 on클래스를 다 삭제함
             다음, 오버한 li에만 다시 on클래스 추가

        <ul>
            <li></li> -- 오버했을 때, 이 li만을 지칭하는 언어 $(this)
            <li></li>
            <li></li>
        <ul>
    */
   $('.interview .list ul li').on('mouseenter', function(){
        $('.interview .list ul li').removeClass('on')
        $(this).addClass('on')
   })
   const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
        spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
        breakpoints: {
            640: {  /* 640px 이상이 되면 적용 */
                spaceBetween: 24, 
                /* sliedsPerView가 갯수로 들어가면 요소 추가해야 함 */
            },
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    }); //Swiper
})