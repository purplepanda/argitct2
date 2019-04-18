$("a[href*='#public']").on("click", function () {
    var isCarousel = $(this).find('.project__carousel-wrapper') ? true : false,
        carousel = $(this).parent('li').find('.project__carousel-wrapper');

    if (isCarousel) {
        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 100);
    }
}); 

$("a[href*='#pri']").on("click", function () {
    var isCarousel = $(this).find('.project__carousel-wrapper') ? true : false,
        carousel = $(this).parent('li').find('.project__carousel-wrapper');

    if (isCarousel) {
        setTimeout(function() {
            carousel.slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
            });    
        }, 100);
    }
});