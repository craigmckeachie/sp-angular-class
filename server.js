var express = require( 'express' ),
  serveIndex = require( 'serve-index' ),
  serveStatic = require( 'serve-static' ),
  bodyParser = require( 'body-parser' ),
  morgan = require( 'morgan' ),
  simulateLatency = require( 'express-simulate-latency' ),
  jsonServer = require( 'json-server' );

require( './morgan-formats' );

var docRoot = process.env.ANGULAR_HOME || '.',
  port = 8000;
var app = express();

// Logging

app.use( morgan( 'spans' ) );

// Request body parsing, only handles x-www-form-urlencoded
app.use( bodyParser.urlencoded( { extended: false } ) );

// including parsing application/json
app.use( bodyParser.json() );

app.get( '/app/reqAsJson', function( req, res ) {
  res.setHeader( 'Content-Type', 'application/json' );
  res.write( JSON.stringify( req.query ) );
  res.end();
} );

app.get( '/longdelay', simulateLatency( { min: 6000, max: 8000 } ), function( req, res, next ) {
  res.write( 'Delay is complete' );
  res.end();
} );

// ###### Content below here processes everything else, in sequence! ######
/*
 * Handle files directly
 * THIS MUST COME FIRST
 * (otherwise, /Foo/Bar does not go to /Foo/Bar/index.html automatically)
 */
app.use( '/', serveStatic( docRoot ) );

// Nice directories
app.use( '/', serveIndex( docRoot, { 'icons': true, 'view': 'details' } ) );

var server = app.listen( port, function() {
  var host = server.address().address;

  console.log( 'AngularClass web server running on %s:%d', (/^::$/.test( host ) ? 'http://localhost' : host), port );
} );

// server.js
var restServer = jsonServer.create();
var router = jsonServer.router( 'data/angular-class.json' );

// logger is false so we can substitute our own custom logger
var middlewares = jsonServer.defaults( { logger: false } );

restServer.use( middlewares );
restServer.use( morgan( 'spurs' ) );
restServer.use( router );
var restServerPort = 8001;
restServer.listen( restServerPort, function() {
  console.log( 'REST Server (json-server) running on http://localhost:' + restServerPort );
} );

