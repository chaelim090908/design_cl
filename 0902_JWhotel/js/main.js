$(document).ready(function(){
    
	
	
	
	
	
	
	
	// .pack .list ul li 마우스 오버 시 on 클래스 추가
    $('.pack .list ul li').on('mouseenter', function(){
		if($(window).width() > 1024){ /* 브라우저 사이즈 1025부터 적용 */
			$('.pack .list ul li').removeClass('on')
			$('.pack .list ul li').addClass('off')
			$(this).removeClass('off')
			$(this).addClass('on')
		}
	})
	$('.pack .list ul li').on('mouseleave', function(){
		$('.pack .list ul li').removeClass('on')
		$('.pack .list ul li').removeClass('off')
	})

	/* .exp .tab ul li button click 시 li에 on클래스 추가
	   .exp .tab ul li.on .tab_detail ul li a photo img가 바뀜
	*/
    $('.exp .tab ul li').on('mouseenter', function(){
        $('.exp .tab ul li').removeClass('on')
        $(this).addClass('on')
    })
})