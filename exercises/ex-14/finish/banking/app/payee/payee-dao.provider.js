(function( angular ) {
  /*
   * Objectives
   * * Build a DAO which wraps around $http for data access
   * * Change code in payee-main.component.js to work with promises
   *
   * Add a dependency on $http
   * Update get and query to use $http and return promises
   * When you are testing code, keep in mind that payeeName will have to be
   * an exact match. If you want a partial match, you have to change its
   * parameter name from payeeName to payeeName_like
   *
   * Lastly, delete the getPayees() function.
   *
   * Go to payee-main.component.js and follow the directions there
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
        var p1 = $http.get( baseUrl + id );
        return p1;
      }

      function query( criteria ) {
        var p1 = $http.get( baseUrl, { params: criteria } );
        return p1;
      }
    } );

})( angular );