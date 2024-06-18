/*
    top 버튼을 클릭하면 상단으로 스크롤 됨
    (css와 같이 누구한테 무엇을 주느냐가 중요함)
    footer .top button -- top 버튼 선택자
*/
$(document).ready(function(){ /* 실행 문법 */
    $('footer .top button').on('click', function(){ /* 해당 요소(button)를 클릭했을 때 */
        $('html, body').animate({ /* 브라우저 전체를 0.5초의 시간을 두고 상단 맨 꼭대기로 올림 */
            scrollTop : 0
        }, 500)
    })
})