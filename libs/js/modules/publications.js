$('.publications__link').on('click', function (e) {
    e.preventDefault();
    $('.publications__content, .publications__link').removeClass('active');
    $(this).parent().find('.publications__content').toggleClass('active');
    $(this).toggleClass('active');
    $('#publications').delay(500).animate({
        scrollTop : 0
    }, 1000);
});

$('.publications__close').on('click', function (e) {
    e.preventDefault();
    $(this).parent().removeClass('active');
    $(this).parent().parent().find('.publications__link').removeClass('active');
});