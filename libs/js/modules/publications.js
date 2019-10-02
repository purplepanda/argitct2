$('.publications__link').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.publications__content').toggleClass('active');
    $(this).toggleClass('active');
});

$('.publications__close').on('click', function (e) {
    e.preventDefault();
    $(this).parent().removeClass('active');
    $(this).parent().parent().find('.publications__link').removeClass('active');
});