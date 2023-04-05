$(function () {
    // 메뉴 스크롤 이동
	$('.scroll').click(function (){
    	$('html, body').stop().animate({scrollTop: $(this.hash).offset.top});
    });

    $('.ham').click(function(){
        $(this).toggleClass('close')
        $('nav').stop().slideToggle();
    })

  

}); //jquery