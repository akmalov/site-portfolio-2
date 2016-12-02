'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
      var locals = require('../../dev/js/content.json');
    return $.gulp.src('./dev/template/pages/*.pug')
      .pipe($.gp.pug({ locals: locals, pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
