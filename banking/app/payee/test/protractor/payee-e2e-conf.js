exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [ 'payee-e2e-spec.js' ],

  // Options to be passed to jasmine2.
  //
  // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // for the exact options available.
  jasmineNodeOpts: {
    // If true, print colors to the terminal.
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
    , print: function() {
    }
  },

  onPrepare: function() {
    var SpecReporter = require( 'jasmine-spec-reporter' );
    // add jasmine spec reporter
    jasmine.getEnv().addReporter( new SpecReporter( { displayStacktrace: true } ) );
  }

};