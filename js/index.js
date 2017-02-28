var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationClickable :true,
		autoplay: 2500,
	    autoplayDisableOnInteraction: false
	})
	 $(document).ready(function(){
	 	$(".new_main>ul>li").hover(function(){
	 		$(".new_main>ul>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
			$(".new_main>div").hide().eq($(this).index()).show();
	 	})
	 })