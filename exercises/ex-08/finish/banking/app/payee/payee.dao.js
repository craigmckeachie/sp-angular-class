/*
 * In this exercise, you will make changes here and payee.component.js
 * In this file, you will be getting rid of getPayees() and exchanging it for
 * Ajax calls.
 *
 * Start at the factory, add a dependency on $http
 * The RESTful endpoint allows requests for specific payees by payeeId
 * http://localhost:7100/banking/payee/12 (Assuming a payeeId of 12)
 * Alter the get() function to make a request for a specific payee
 * based on the passed payeeId
 *
 * In query, change the function so that it makes a request to the base URL
 * http://localhost:7100/banking/payee
 * but passes along the parameters found in criteria as part of the querystring
 *
 * In both cases, have the functions return the resulting promise. Then go
 * to payee.component.js and follow the directions there.
 *
 */
(function( angular ) {
  angular.module( 'payee.dao', [] )
      .factory( 'payeeDAO', function( $http ) {
        var baseHref = 'http://localhost:7100/banking/payee/';

        var dao = {
          get: get,
          query: query
        };

        return dao;

        function get( id ) {
          return $http.get( baseHref + id );
        }

        function query( criteria ) {
          return $http.get( baseHref, { params: criteria } );
        }

      } )
})( angular );