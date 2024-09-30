$(document).ready(function(){
	const swiperv = new Swiper('.SwiperV', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 1,
		spaceBetween: 0,
		mousewheel: true,
		direction: "vertical",
		on: {
			slideChange: function(){
				console.log(this.realIndex)
			}
		},
	});

    // const col_swiper = new Swiper('.swiperV', {
	// 	direction: "vertical",
	// 	slidesPerView: 1,
	// 	spaceBetween: 0,
	// 	mousewheel: true,
	// 	allowTouchMove: false,
	// 	keyboard: true,
	// 	ally: true,
	// 	on: {
	// 		slideChange: function(){
	// 			if(this.realIndex == 0){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:nth-child(1)').addClass('on')
	// 			}else if(this.realIndex == 1){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:nth-child(2)').addClass('on')
	// 			}else if(this.realIndex == 2){
	// 				$('.page ul li').removeClass('on')
	// 				if(this.previousIndex == 1){//위에서 아래로 내려왔을때
	// 					$('.page ul li:nth-child(3)').addClass('on')
	// 				}else{//아래에서 위로 올라왔을때
	// 					$('.page ul li:nth-last-child(2)').addClass('on')
	// 				}
	// 			}else if(this.realIndex == 3){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:last-child').addClass('on')
	// 			}
	// 		}
	// 	},
	// });
    // const row_swiper = new Swiper('.swiperH', {
	// 	direction: "horizontal",
	// 	slidesPerView: 1,
	// 	spaceBetween: 0,
	// 	mousewheel: true,
	// 	allowTouchMove: false,
	// 	keyboard: true,
	// 	ally: true,
	// 	nested: true,
	// 	on: {
	// 		slideChange: function(){
	// 			if(this.realIndex == 0){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:nth-child(3)').addClass('on') //세번째 li
	// 			}else if(this.realIndex == 1){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:nth-child(4)').addClass('on') //네번째 li
	// 			}else if(this.realIndex == 2){
	// 				$('.page ul li').removeClass('on')
	// 				$('.page ul li:nth-child(5)').addClass('on')
	// 			}
	// 		}
	// 	}
	// });

    // $('.page a[data-href="portfolio"]').on('click', function(){
	// 	col_swiper.slideTo(0, 500);
	// });
	// $('.page a[data-href="profile"]').on('click', function(){
	// 	col_swiper.slideTo(1, 500);
	// });
	// $('.page a[data-href="first"]').on('click', function(){
	// 	col_swiper.slideTo(2, 500);
	// 	row_swiper.slideTo(0, 500);
	// });
	// $('.page a[data-href="second"]').on('click', function(){
	// 	col_swiper.slideTo(2, 500);
	// 	row_swiper.slideTo(1, 500);
	// });
	// $('.page a[data-href="third"]').on('click', function(){
	// 	col_swiper.slideTo(2, 500);
	// 	row_swiper.slideTo(2, 500);
	// });
	// $('.page a[data-href="end"]').on('click', function(){
	// 	col_swiper.slideTo(2, 500);
	// 	row_swiper.slideTo(2, 500);
	// });
})
