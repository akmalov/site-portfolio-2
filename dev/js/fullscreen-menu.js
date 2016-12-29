$('.fullscreen-menu').on('click', (function() {
    $(this).toggleClass('fullscreen-menu_active');
    $('.overlay').toggleClass('overlay_open');
}));