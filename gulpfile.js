const gulp = require( 'gulp' ),
  del = require( 'del' ),
  minimist = require( 'minimist' );

let exercises = 'exercises/',
  finishedApp = 'finished-app/',
  demos = 'demos/',
  start = '/start/',
  finish = '/finish/',
  app = 'banking/app/';

let options = minimist( process.argv.slice( 2 ) );

gulp.task( 'clean-app', function() {
  return del( app + '**/*' );
} );

gulp.task( 'start-to-app', function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + start + app + '**/*.+(ts|html|css|js)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'finish-to-app', function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + finish + app + '**/*.+(ts|html|css|js)' )
      .pipe( gulp.dest( app ) );
  }
} );
