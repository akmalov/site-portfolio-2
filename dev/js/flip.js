$('.btn_auth').on('click', function() {
    $('.welcome__container').addClass('welcome__container_flip');
    $(this).addClass('btn_auth_hide');
});

$('.tabs__item_index').on('click', function() {
    $('.welcome__container').removeClass('welcome__container_flip');
    $('.btn_auth').removeClass('btn_auth_hide');
});