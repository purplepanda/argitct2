 function closeAllMenus() {
    $('#menuLink').delay(250).removeClass('open');
    $('.nav__header').delay(250).removeClass('open');
    $('.nav__list').delay(250).removeClass('open');
    $('body, html').removeClass('nav-open');
}

$('#menuLink').on('click', function(e) {
    e.preventDefault();
    $(this).parent().parent().find('.nav__list').toggleClass('open');
    $(this).parent().toggleClass('open');
    $(this).toggleClass('open');
    $('body, html').toggleClass('nav-open');
});

$('.nav__list-link').on('click', function(e) {
    closeAllMenus();
});

$('main').on('click', function(e) {
    if ($('body').hasClass('nav-open')) {
        closeAllMenus(); 
    }
});

$('body').on('keydown', function(e) {
    if (e.keyCode == 27) {
        closeAllMenus();
    }
});

$(window).on('resize', function () {
    closeAllMenus();  
});