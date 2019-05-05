$('.btn-submit button').on('click', function() {
    if ($('input[name*="username"]').val() === '' || $('input[name*="password"]').val() === '') {
        $('.form__error').text('Please fill out all fields.').show().delay(2000).fadeOut(500);
    } else if ($('input[name*="username"]').val() !== '' && $('input[name*="password"]').val() !== '') {
        $('.form__error').text('Username or Password is incorrect. Please try again.').show().delay(2000).fadeOut(500);
    }
});