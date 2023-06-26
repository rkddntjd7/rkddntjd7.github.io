$(function () {
    // 메뉴 스크롤 이동
	$('.scroll').click(function (){
    	$('html, body').stop().animate({scrollTop: $(this.hash).offset.top});
    });

    $('.ham').click(function(){
        $(this).toggleClass('close')
        $('nav').stop().slideToggle();
    })

    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.ham').length && !target.closest('nav').length) {
            $('.ham').removeClass('close');
            $('nav').slideUp();
        }
    });

}); //jquery

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });