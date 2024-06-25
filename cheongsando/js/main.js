/*
   객체(object), 속성(Property), 메소드(method)
   속성 - 답이 있는 것, 대답하면 되는 것 (명령을 내려서 바꿀 수 없는 것 / 괄호 없음)
   메소드 - 행동을 시키는 것 (괄호 있음)

   객체.속성
   객체.메소드('상세행동지침')
*/

/* 함수 - 여러개의 행동을 반복해서 하나의 이름으로 묶는 것
          - 한번만 실행하는 함수 (행동이 많아서 묶어줌) */

/* 무조건 js는 document.ready를 써줘야함 - 시작하는 문서 */
/* () 안에는 짧은 단어밖에 들어가지 못해서
   많은 명령문을 사용할 때는 {} 를 씀 */

/* jquery는 실행시기가 중요함 */

$(document).ready(function(){

    console.log('테스트')

    // 문서가 로딩된 이후 단 1번만 실행
    let scrolling = $(window).scrollTop() /* scrolling 선언 -- 대입 연산자 */
    console.log(scrolling)

    /* 브라우저가 스크롤이 조금이라도 되면 header에 fixed라는 Class를 추가
       다시 맨 위로 올라가면 fixed라는 클래스를 삭제 */

    /* if(){}else{}  --  참/거짓 구분. 둘 중 하나만 실행함 */
   /* chk = check */

    function scroll_chk(){ // ** 함수를 선언 **

        // scrolling이라는 변수에 현재 스크롤된 값을 저장함 (일단 넣어주고 시작함)
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ // 스크롤 값이 0보다 크면
            $('header').addClass('fixed')
        }else{ // 스크롤 값이 0이면 - 맨 위로 스크롤
            $('header').removeClass('fixed')
        }
    }//scroll_chk

    scroll_chk() // **  함수를 호출  **

    // 브라우저 스크롤을 할 때마다 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    /* 
        .tour .list ul li 한테
        오버한 li에만 'active' Class 추가
        이전에 active를 가지고 있었던 li에서는 active 삭제
        --- ** 무조건 하나의 li에만 active 클래스 **

        --> 이전에 오버한 li는 알기 어려움
        --  모든 li에 있는 active 모두 삭제하고
            오버한 li에만 다시 active 클래스 추가
    */

    /* .on() > 감시자 (해당 행동을 하는지 안하는지 인식)
       $(this) > 행동을 한 당사자 */

    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        // 수많은 li 중에서 지금 오버한 li 한개
        $(this).addClass('active')
    })

    /* footer .family button.btn_open 를 클릭하면
       footer .family 에 open 클래스를 줘야함
       footer .family button.btn_close 를 클릭하면
       footer .family 에 open 클래스를 삭제함
       
    */
   $('footer .family button.btn_open').on('click', function(){
        $('footer .family').addClass('open')
        $('footer .family .list').slideDown()
   })
   $('footer .family button.btn_close').on('click', function(){
        $('footer .family').removeClass('open')
        $('footer .family .list').slideUp()
    })


}) //$(document).ready