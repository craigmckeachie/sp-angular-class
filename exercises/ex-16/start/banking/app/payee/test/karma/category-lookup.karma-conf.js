module.exports = function( config ) {
  /*
   * In the files set below, add the following:
   * - paths to angular.js and angular-mocks.js
   * - path to payee.module.js
   * - A wildcard to pickup everything related to category-lookup
   *
   * Keep in mind that the basePath is the payee/ directory
   * Then return to category-lookup.provider.spec.js
   */
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
