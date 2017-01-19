(function( angular ) {
  /*
   * Objectives
   * * Update payee-dao.provider.js to return data, not raw XHR objects
   * * Update calls in payeeMain to use the rest of the DAO's capabilities
   *
   * Change get() and query() so that they return a second-order promise
   * where the promise resolves to the data, not to the response object.
   *
   * As a challenge, add a search on payeeName_like, instead of payee.
   *
   * Then go to payee-main.component.js
   *
   * Test your code by searching on a partial payee name like Yoyodyne
   *
   */
  angular.module( 'payee' )
    .factory( 'payeeDAO', function( $filter, $http ) {
      var baseUrl = 'http://localhost:8001/payee/',
        filter = $filter( 'filter' );

      return {
        get  : get,
        query: query
      };

      function get( id ) {
        return $http.get( baseUrl + id )
          .then( function( response ) {
            return response.data;
          } );
      }

      function query( criteria ) {
        if ( criteria && criteria.payeeName ) {
          criteria.payeeName_like = criteria.payeeName;
          delete criteria.payeeName;
        }

        return $http.get( baseUrl, { params: criteria } )
          .then( function( response ) {
            return response.data;
          } );
      }
    } );

})( angular );