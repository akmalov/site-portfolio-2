$(".fullscreen-menu").on("click", (function() {
   $(this).toggleClass("fullscreen-menu_active");
   $(".overlay").toggleClass("overlay_open");
}));

$(".btn_auth").on("click", function() {
    $(".welcome__container").addClass("welcome__container_flip");
    $(this).addClass("btn_auth_hide");
});

$(".tabs__item_index").on("click", function() {
    $(".welcome__container").removeClass("welcome__container_flip");
    $(".btn_auth").removeClass("btn_auth_hide");
});

$(".form-radio__input:checked").on("click", function() {
    $(".welcome__container").removeClass("welcome__container_flip");
    $(".btn_auth").removeClass("btn_auth_hide");
});

var slider = (function() {

    return {
        init: function () {
            var _this = this;
            $('.works-slider__controls-button').on('click', function(e){
                e.preventDefault();

                var
                    $this = $(this),
                    slides = $this.closest('.works-slider__wrapper').find('.works-slider__item'),
                    activeSlide = slides.filter('.works-slider__item_active'),
                    nextSlide = activeSlide.next(),
                    prevSlide = activeSlide.prev(),
                    firstSlide = slides.first(),
                    lastSlide = slides.last();
                if($this.hasClass('works-slider__controls-button_next')) {
                    if (nextSlide.length) {
                        _this.moveSlide(nextSlide, 'forward');
                    } else {
                        _this.moveSlide(firstSlide, 'forward');
                    }
                } else {
                    if (prevSlide.length) {
                        _this.moveSlide(prevSlide, 'backward');
                    } else {
                        _this.moveSlide(lastSlide, 'backward');
                    }
                }
            });
        },

        moveSlide: function (slide, direction) {
            var
                container = slide.closest('.works-slider__wrapper'),
                slides = container.find('.works-slider__item'),
                activeSlide = slides.filter('.works-slider__item_active'),
                slideWidth = slides.width(),
                duration = 500,
                reqCssPosition = 0,
                reqSlideStrafe = 0;
            if (direction === 'forward') {
                reqCssPosition = slideWidth;
                reqSlideStrafe = -slideWidth;
            } else if (direction === 'backward') {
                reqCssPosition = -slideWidth;
                reqSlideStrafe = slideWidth;
            }
            slide.css('left', reqCssPosition).addClass('works-slider__item_inslide');
            var movableSlide = slides.filter('.works-slider__item_inslide');
            activeSlide.animate({left: reqSlideStrafe}, duration);
            movableSlide.animate({left: 0}, duration, function(){
                var $this = $(this);

                slides.css('left', '0').removeClass('works-slider__item_active');
                $this.toggleClass('works-slider__item_active works-slider__item_inslide')
            });
        }
    }

}());

$(document).ready(function(){
   if ($('.works-slider__wrapper').length) {
       slider.init();
   }
});

