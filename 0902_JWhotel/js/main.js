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
})