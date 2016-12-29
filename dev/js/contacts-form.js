$(function(){
    $('.contact__form').on('submit', function(e){
        e.preventDefault();

        var
            form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '../mail.php',
            type: 'POST',
            data: formData,
            success: function (data) {
                var popup = data.status ? '#success' : '#error';
                $(popup).addClass('confirm_open');
                form.trigger('reset');
            }
        });
    });

    $('.confirm__close').on('click', function(e) {
        e.preventDefault();
        $('.confirm').removeClass('confirm_open');
    });
});