$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    effect: "fade", /* fade 효과 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
	

	navigation: {  /* 이전, 다음 버튼 */
        prevEl: '.visual .btn_prev',  
		nextEl: '.visual.btn_next',
        },

    });

	/* 
		.visual .btn_wrap button.btn_stop
		일시정지버튼을 클릭하면
		1. 팝업 일시정지
		2. 일시정지 버튼은 숨김, 재생버튼 나타남

		.visual .btn_wrap button.btn_play
		재생버튼을 클릭하면
		1. 팝업을 다시 시작
		2. 재생버튼은 숨김, 일시정지 버튼 나타남
	*/

	$('.visual .btn_wrap button.btn_stop').on('click', function(){
		visual_swiper.autoplay.stop();  /* 일시정지 기능 */
		$(this).hide() // 숨김
		$('.visual .btn_wrap button.btn_play').show() // 보이기
	})
	$('.visual .btn_wrap button.btn_play').on('click', function(){
		visual_swiper.autoplay.start();  /* 재생 기능 */
		$(this).hide() // 숨김
		$('.visual .btn_wrap button.btn_stop').show() // 보이기
	})

	/*
		--- pc일 때 ---
		.biz .list ul li 에 마우스를 올리면
		마우스를 올린 li는 on 클래스 추가
		마우스를 올리지 않은 li는 off 클래스를 추가
	*/
	$('.biz .list ul li').on('mouseenter', function(){
		if($(window).width() > 1024){ /* 브라우저 사이즈 1025부터 적용 */
			$('.biz .list ul li').removeClass('on')
			$('.biz .list ul li').addClass('off')
			$(this).removeClass('off')
			$(this).addClass('on')
		}
	})
	$('.biz .list').on('mouseleave', function(){
		$('.biz .list ul li').removeClass('on')
		$('.biz .list ul li').removeClass('off')
	})



	const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			768: {    /* 768px 이상일때 적용 */
				slidesPerView: 2,
				spaceBetween: 24,
			},
			1024: {    /* 768px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
		navigation: {
			nextEl: '.news .next',
			prevEl: '.news .prev',
		},
		scrollbar: {
			el: ".news .swiper-scrollbar",
			hide: false,
			draggable: true,
		  },
	});
})