var morgan = require( 'morgan' );

morgan.format( 'spans', function developmentFormatLine( tokens, req, res ) {
  // get the status code if response written
  var status = res._header
    ? res.statusCode
    : undefined;

  var color = getColor( status );

  // get colored function
  var fn = developmentFormatLine[ color ];

  if ( !fn ) {
    // compile
    fn = developmentFormatLine[ color ] = morgan.compile( '\x1b[0mWS: localhost|' + req.socket.address().port + ' :date[iso] :method \x1b['
      + color + 'm:status \x1b[0m:url :res[content-length] bytes\x1b[0m' )
  }

  return fn( tokens, req, res )
} );

morgan.format( 'spurs', function developmentFormatLine( tokens, req, res ) {
  // get the status code if response written
  var status = res._header
    ? res.statusCode
    : undefined;

  var color = getColor( status );

  // get colored function
  var fn = developmentFormatLine[ color ];

  if ( !fn ) {
    // compile
    fn = developmentFormatLine[ color ] = morgan.compile( '\x1b[0mREST: localhost|' + req.socket.address().port + ' :date[iso] :method \x1b['
      + color + 'm:status \x1b[0m:url :res[content-length] bytes\x1b[0m' )
  }

  return fn( tokens, req, res )
} );

function getColor( status ) {
  // get status color
  return status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
      : status >= 300 ? 36 // cyan
        : status >= 200 ? 32 // green
          : 0; // no color
}