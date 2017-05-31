module.exports = function( config ) {
  config.set( {
    basePath  : '../../',
    frameworks: [ 'jasmine' ],
    files     : [],

    reporters: [ 'mocha' ],

    port       : 9876,
    colors     : true,
    logLevel   : config.LOG_INFO,
    autoWatch  : true,
    browsers   : [ 'Chrome' ],
    singleRun  : false,
    concurrency: Infinity
  } )
}
