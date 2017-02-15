var gulp = require( 'gulp' ),
  strip = require( 'gulp-strip-comments' ),
  del = require( 'del' ),
  minimist = require( 'minimist' ),
  exercises = 'exercises/',
  demos = 'demos/',
  start = '/start/',
  finish = '/finish/',
  app = 'banking/app/';

var options = minimist( process.argv.slice( 2 ) );

gulp.task( 'clean-start', function() {
  if ( options.dest )
    return del( exercises + options.dest + start + app );
} );

gulp.task( 'clean-finish', function() {
  if ( options.dest )
    return del( exercises + options.dest + finish );
} );

gulp.task( 'clean-payee', function() {
  return del( app + 'payee/*' );
} );

gulp.task( 'clean-app', function() {
  return del( app + '**/*' );
} );

gulp.task( 'clean-demos', function() {
  return del( app + 'demos/*' )
} );

gulp.task( 'strip', function() {
  if ( options.dest ) {
    var base = exercises + options.dest;
    gulp.src( [ base + start + '**/*', base + finish + '**/*' ], { base: base } )

    // Be careful, as this may ruin regexps
    // But is necessary for anything with decorators
      .pipe( strip.text() )
      .pipe( strip.html() )
      .pipe( gulp.dest( base ) );
  }
} );

gulp.task( 'copy-demos', ['clean-demos'], function() {
  gulp.src( finishedApp + demos + '**/*' )
    .pipe( gulp.dest( app ) );
} );

gulp.task( 'app-to-finish', [ 'clean-finish' ], function() {
  if ( options.dest )
    gulp.src( [ app + 'payee/**/*.+(js|html|css)'], { base: app } )
      .pipe( gulp.dest( exercises + options.dest + finish + app ) );
} );

gulp.task( 'finish-to-app', function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + finish + app + '**/*.+(js|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'app-to-start', [ 'clean-start' ], function() {
  if ( options.dest )
    gulp.src( [ app + 'payee/**/*.+(js|html|css)' ], { base: app } )
      .pipe( gulp.dest( exercises + options.dest + start + app ) );
} );

gulp.task( 'start-to-app', [ 'clean-payee' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + start + app + '**/*.+(js|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'swap', function() {
  if ( options.src && options.dest && options.ex ) {
    var base = exercises + options.ex + '/';
    gulp.src( base + options.src + '/**/*', { base: base + options.src } )
      .pipe( gulp.dest( base + options.dest ) );
  }
} );
