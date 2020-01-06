$(function(){
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 200);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 500 ){
			$('#BackTop').fadeIn(222);
		} else {
			$('#BackTop').stop().fadeOut(222);
		}
	}).scroll();
});
