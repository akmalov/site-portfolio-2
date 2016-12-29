'use strict';

module.exports = function() {
    $.gulp.task('copy:php', function() {
        return $.gulp.src('./dev/template/*.php', { since: $.gulp.lastRun('copy:php') })
            .pipe($.gulp.dest($.config.root));
    });
};
