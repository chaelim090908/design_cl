$(document).ready(function(){

    /* .rest .txt button.tab_menu 마우스오버 시
	   (각각 class : guest, lounge, biz)button에 on클래스 추가
	   .rest .list ul li에 해당 클래스 추가
	   .rest .list ul li.(해당클래스) a에 on클래스 추가
	*/
	const rest_list_swiper = new Swiper('.rest .list .swiper', {
		effect: "fade",
		loop: true,
		navigation: {
			nextEl: '.rest .list .swiper .rest-next',
			prevEl: '.rest .list .swiper .rest-prev', 
		},
	});
	
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


	const time_list_swiper = new Swiper('.time .list .swiper', {
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		loop: true,
		pagination: {
			el: '.time .list .paging',
			clickable: true, 
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<span class="item' + (index + 1) + ' ' + className + '"></span>';
			},
		},
	});

	/* .exp .txt .tab_txt button (class : spa, fitn, pool) click 시 li에 on클래스 추가
	   .exp .tab ul li class가 on으로 바뀜
	*/
    $('.exp .txt .tab_txt button.spa').on('mouseenter', function(){
        $('.exp .txt .tab_txt button').removeClass('on')
        $(this).addClass('on')
		$('.exp .tab ul li').removeClass('on')
		$('.exp .tab ul li.spa').addClass('on')
    })
	$('.exp .txt .tab_txt button.fitn').on('mouseenter', function(){
        $('.exp .txt .tab_txt button').removeClass('on')
        $(this).addClass('on')
		$('.exp .tab ul li').removeClass('on')
		$('.exp .tab ul li.fitn').addClass('on')
    })
	$('.exp .txt .tab_txt button.pool').on('mouseenter', function(){
        $('.exp .txt .tab_txt button').removeClass('on')
        $(this).addClass('on')
		$('.exp .tab ul li').removeClass('on')
		$('.exp .tab ul li.pool').addClass('on')
    })
})