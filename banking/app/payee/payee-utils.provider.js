(function( angular ) {
  angular.module( 'payee' )
      .constant( 'payeeUtils', {
        lastParams : null,
        paramsToCriteria : function(stateParams) {
          var newParams = angular.copy( stateParams );
          delete newParams[ '#' ];
          return newParams;
        },
        sameParams: function(params) {
          params = this.paramsToCriteria( params );

          var result = false;
          if (this.lastParams && angular.equals(this.lastParams, params)) {
            result = true;
          }

          this.lastParams = params;

          return result;
        }
      } )
})( angular );