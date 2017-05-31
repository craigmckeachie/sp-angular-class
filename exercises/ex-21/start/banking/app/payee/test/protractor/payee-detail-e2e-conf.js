exports.config = {
  framework      : 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs          : [ 'payee-detail-e2e-spec.js' ],

  jasmineNodeOpts: {
    showColors            : true,
    defaultTimeoutInterval: 30000
    , print               : function() {
    }
  },

  onPrepare: function() {
    var SpecReporter = require( 'jasmine-spec-reporter' );
    jasmine.getEnv().addReporter( new SpecReporter( { displayStacktrace: true } ) );
  }

};