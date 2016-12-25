var slider = (function() {
    var downBtn = $('.slider__thumbnail_down');
    var upBtn = $('.slider__thumbnail_up');
    var slide = $('.slider__current');
    var description = $('.slider__desc');
    var counterDown = 0;
    var counterUp = 2;
    var counterSlide = 1;
    var itemsDown = downBtn.find('.slider-thumbnail__item'),
        itemsUp = upBtn.find('.slider-thumbnail__item'),
        itemsSlide = slide.find('.slider-current__item'),
        itemsDescr = description.find('.slider-desc__item');
    downBtn.on('click', function() {
        counterDown--;
        counterUp--;
        counterSlide--;
        function toggleSlide() {
            activeItemSlide.fadeOut(700);
            reqItemSlide.fadeIn(700);
            activeItemSlide.removeClass('slider-current__item_active').css('opacity', '0');
            reqItemSlide.addClass('slider-current__item_active');
            reqItemDescr.addClass('slider-desc__item_active');
            activeItemDescr.removeClass('slider-desc__item_active');
        }
        var activeItemDown = downBtn.find('.slider-thumbnail__item_active'),
            activeItemUp = upBtn.find('.slider-thumbnail__item_active'),
            activeItemSlide = slide.find('.slider-current__item_active'),
            activeItemDescr = description.find('.slider-desc__item_active');
        if (counterDown < 0) counterDown = itemsDown.length-1;
        if (counterUp < 0) counterUp = itemsUp.length-1;
        if (counterSlide < 0) counterSlide = itemsUp.length-1;
        var reqItemDown = itemsDown.eq(counterDown),
            reqItemUp = itemsUp.eq(counterUp),
            reqItemSlide = itemsSlide.eq(counterSlide),
            reqItemDescr = itemsDescr.eq(counterSlide);
        activeItemDown.animate({
            'top': '100%'
        }, 300);
        activeItemUp.animate({
            'top' : '-100%'
        }, 300);
        toggleSlide();
        reqItemDown.animate({
            'top' : '0'
        }, 300, function() {
            activeItemDown.removeClass('slider-thumbnail__item_active').css('top', '-100%');
            reqItemDown.addClass('slider-thumbnail__item_active');
        });
        reqItemUp.animate({
            'top' : '0'
        }, 300, function() {
            activeItemUp.removeClass('slider-thumbnail__item_active').css('top', '100%');
            reqItemUp.addClass('slider-thumbnail__item_active');
        });
    });
    upBtn.on('click', function() {
        counterDown++;
        counterUp++;
        counterSlide++;
        function toggleSlide() {
            activeItemSlide.fadeOut(700);
            reqItemSlide.fadeIn(700);
            activeItemSlide.removeClass('slider-current__item_active').css('opacity', '0');
            reqItemSlide.addClass('slider-current__item_active');
            reqItemDescr.addClass('slider-desc__item_active');
            activeItemDescr.removeClass('slider-desc__item_active');
        }
        var activeItemDown = downBtn.find('.slider-thumbnail__item_active'),
            activeItemUp = upBtn.find('.slider-thumbnail__item_active'),
            activeItemSlide = slide.find('.slider-current__item_active'),
            activeItemDescr = description.find('.slider-desc__item_active');
        if (counterUp >= itemsUp.length) {
            counterUp = 0;
        }
        if (counterDown >= itemsDown.length) counterDown = 0;
        if (counterSlide >= itemsDown.length) counterSlide = 0;
        var reqItemDown = itemsDown.eq(counterDown),
            reqItemUp = itemsUp.eq(counterUp),
            reqItemSlide = itemsSlide.eq(counterSlide),
            reqItemDescr = itemsDescr.eq(counterSlide);
        activeItemDown.animate({
            'top': '100%'
        }, 300);
        activeItemUp.animate({
            'top' : '-100%'
        }, 300);
        toggleSlide();
        reqItemDown.animate({
            'top' : '0'
        }, 300, function() {
            activeItemDown.removeClass('slider-thumbnail__item_active').css('top', '-100%');
            reqItemDown.addClass('slider-thumbnail__item_active');
        });
        reqItemUp.animate({
            'top' : '0'
        }, 300, function() {
            activeItemUp.removeClass('slider-thumbnail__item_active').css('top', '100%');
            reqItemUp.addClass('slider-thumbnail__item_active');
        });
    });
}());

module.exports = {
    worksSlider: slider
};