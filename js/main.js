$(function () {
    // 메뉴 스크롤 이동
	$('.scroll').click(function (){
    	$('html, body').stop().animate({scrollTop: $(this.hash).offset.top});
    });

    $('.ham').click(function(){
        $(this).toggleClass('close')
        $('nav').stop().slideToggle();
        $('.bg-shadow').css("display", "block");
    })

    // $('.bg-shadow').click(function(){
    //     $('nav').slideToggle();
    //     $('.bg-shadow').css("display", "none");
    // })

  

}); //jquery

$('.slider').slick();