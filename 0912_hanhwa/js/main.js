$(document).ready(function(){
	const biz_swiper = new Swiper('.biz .swiper', {

		effect: "fade",
	
		autoplay: { 
			delay: 13000,
			disableOnInteraction: true,
		},
	
		loop: true,
	
		pagination: {
			el: '.biz .list .paging',
			clickable: true,
			},
	
		navigation: {
			nextEl: '.biz-next',
			prevEl: '.biz-prev',  
		},
	
	});

	$(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
		$('.cursor').css('left', e.pageX + 'px');
		$('.cursor').css('top', e.pageY + 'px');
	});
	$('.res .list ul li a .photo').hover(function(){
		$('.cursor').toggleClass('on');
	});
})