$(document).ready( function() {
    if (/Mobi|Android/i.test(navigator.userAgent) && $('.modal__content--mob').length > 0) {
        $('.modal__content--pdf').hide();
        $('.modal__content--mob').show();
    }  
});