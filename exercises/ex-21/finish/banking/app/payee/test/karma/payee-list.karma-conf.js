module.exports = function( config ) {
  config.set( {
    basePath  : '../../',
    frameworks: [ 'jasmine' ],
    files     : [
      '../../../node_modules/angular/angular.js',
      '../../../node_modules/angular-mocks/angular-mocks.js',
      'payee.module.js',
      'payee-list.*.js'
    ],

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
