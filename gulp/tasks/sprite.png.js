'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        var spriteData = '';

        spriteData = $.gulp.src('./dev/sprite/png/*.png')
            .pipe($.spritesmith({
                retinaSrcFilter: './dev/sprite/png/*@2x.png',
                imgName: '../img/png_sprite.png',
                retinaImgName: '../img/sprite@2x.png',
                cssName: 'png_sprite.scss',

                algorithm: 'left-right',
                padding: 20
            }));
        var imgStream = spriteData.img.pipe('./dev/images');
        var cssStream = spriteData.css.pipe('./dev/style/common');

        return (imgStream, cssStream);
    });
};