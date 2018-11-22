/**
 * @file
 * Task: Build.
 */

 /* global module */

module.exports = function (gulp, plugins, options) {
  'use strict';
  plugins.runSequence.options.showErrorStackTrace = false;

  gulp.task('build', function(cb) {
    plugins.runSequence(
      'compile:sass',
      'compile:js',
      'compile:vendorjs',
      'images',
      ['minify:css',
        'minify:js',
        /*'compile:styleguide'*/],
      [/*'lint:js',
        'lint:js-gulp',*/
        'lint:js-with-fail',
        'lint:css-with-fail'] ,
      cb);
  });

  gulp.task('build:dev', function(cb) {
    plugins.runSequence(
      'compile:sass',
      'compile:js',
      'compile:vendorjs',
      'images',
      ['minify:css',
        'minify:js',
        /*'compile:styleguide'*/],
      [/*'lint:js-gulp',
        'lint:js',*/
        'lint:css'],
      cb);
  });
};
