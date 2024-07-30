$(document).ready(function(){
    /*
        1. 탭버튼을 클릭하면 active 클래스 추가 (클릭한 li에만)
        .cts_history .tab_area .tab_btn ul li
        2. 클릭한 li만 aria-selected="true" 나머지는 모두 false
        3. 클릭한 li에서 aria-controls 값을 가져와서 하단 콘텐츠 중에서 같은 이름의 id를 가진
        요소에만 active 클래스를 추가
        .cts_history .tab_area .tab_cnt div[role="tabpanel"]

        // attr : 속성을 물어보거나 주는 것
        // find : 내 하위 속성을 찾음
           find라는 명령으로 id가 aria-controls 값과 같은 요소를 찾아야 함
           > find는 하위요소를 검색하는 기능이라서 선택자가 tabpanel을 직접 선택하는 게 아니라
             그 부모요소를 선택해서 하위요소를 검색하게 해야함
    */

    let tab_btn = $('.cts_history .tab_area .tab_btn ul li') /* 변수(이름을 간단하게 바꿈) */
    let tab_name
    let tab_cnt = $('.cts_history .tab_area .tab_cnt div[role="tabpanel"]')
    let tab_cnt_parent = $('.cts_history .tab_area .tab_cnt')

    tab_btn.on('click', function(){
        tab_btn.removeClass('active')
        $(this).addClass('active')
        tab_btn.attr('aria-selected', 'false')
        $(this).attr('aria-selected', 'true')
        tab_name = $(this).attr('aria-controls')
        tab_name = '#' + tab_name // id 선택자를 추가로 삽입 ( + => 뒤에 붙여!)
        console.log(tab_name)
        tab_cnt.removeClass('active')
        tab_cnt_parent.find(tab_name).addClass('active')
        
    })
}) //$(document).ready