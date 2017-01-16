(function( angular ) {
  angular.module( 'tx.utils', [] )
      .constant( 'txUtils', {
        lastParams : null,
        currentParams : null,
        setCurrentParams: function(params) {
          this.lastParams = this.currentParams;
          this.currentParams = params;
        },
        getCurrentParams: function() {
          return this.currentParams;
        },
        getLastParams : function() {
          return this.lastParams;
        }
      } )
})( angular );