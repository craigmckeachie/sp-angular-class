module.exports = function( config ) {
  config.set( {
    basePath  : '',
    frameworks: [ 'jasmine', 'testdouble' ],
    files     : [
      '../../node_modules/angular/angular.js',
      '../../node_modules/angular-mocks/angular-mocks.js',
      '*.js',
      '*.html'
    ],

    exclude: [
      '*.karma-conf.js'
    ],

    preprocessors: {
      '**/*.html': [ 'ng-html2js' ]
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'htmlTemplates'
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
