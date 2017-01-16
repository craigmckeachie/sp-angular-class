/*
 * Create a module, payee.utils, which has no dependencies and defines
 * a single constant, payeeUtils
 *
 * This constant should have one property and two methods
 *
 * Properties:
 * lastParams: initialized to null
 *
 * Methods:
 * paramsToCriteria
 * Arguments: a $stateParams object
 * Returns: a copied version of the argument, with the '#' property removed
 * ($stateParams always has a '#' property, for no good reason)
 *
 * sameParams
 * Arguments: any object literal
 * Returns true or false based on object equality
 * It should return true only if lastParams is defined, and if the passed params
 * and lastParams are the same (hint: angular.equals)
 * After determining the above, it should set lastParams to params
 * (It's a cache object for parameters)
 *
 */

(function( angular ) {
  angular.module( 'payee.utils', [] )
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