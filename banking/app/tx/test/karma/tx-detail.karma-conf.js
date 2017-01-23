module.exports = function( config ) {
  config.set( {
    basePath  : '../../',
    frameworks: [ 'jasmine', 'testdouble' ],
    files     : [
      { pattern: '../../../node_modules/angular/angular.js', watched: false },
      { pattern: '../../../node_modules/angular-mocks/angular-mocks.js', watched: false },
      { pattern: 'tx.module.js', watched: false },
      'tx-detail.*'
    ],

    exclude: [
      '*.karma-conf.js'
    ],

    preprocessors: {
      '**/*.html': [ 'ng-html2js' ]
    },

    ngHtml2JsPreprocessor: {
      moduleName   : 'htmlTemplates',
      prependPrefix: 'app/tx/'
    },

    reporters: [ 'mocha' ],

    port       : 9876,
    colors     : true,
    logLevel   : config.LOG_INFO,
    autoWatch  : true,
    browsers   : [ 'Chrome' ],
    singleRun  : false,
    concurrency: Infinity
  } );
}
