/*
 * You will be changing get() and query() as follows:
 *
 * Their first-order promise should return only the data property on success
 * (passing along only the actual results, not any $http information to chained promises)
 * and should log an error if it happens and then $q.reject() it along
 */
(function( angular ) {
  angular.module( 'payee.dao', [] )
    .factory( 'payeeDAO', function( $http, $q ) {
      var baseHref = 'http://localhost:7100/banking/payee/';

      var dao = {
        get  : get,
        query: query
      };

      return dao;

      function get( id ) {
        return $http.get( baseHref + id )
          .then( function( results ) {
            return results.data;
          }, function( err ) {
            $log.error( 'payeeDAO.get() error: ', err );
            return $q.reject( err );
          } );
      }

      function query( criteria ) {
        return $http.get( baseHref, { params: criteria } )
          .then( function( results ) {
            return results.data;
          }, function( err ) {
            $log.error( 'payeeDAO.query() error: ', err );
            return $q.reject( err );
          } );
      }

    } )
})( angular );