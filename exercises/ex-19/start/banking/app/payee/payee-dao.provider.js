(function( angular ) {
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