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
})