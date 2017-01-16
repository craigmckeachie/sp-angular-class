(function( angular ) {

  angular.module( 'category' )
    .factory( 'categoryDAO', categoryDAO );

  function categoryDAO( $http, $log, $q, bankingHttpSerializer, _ ) {
    var baseHref = 'http://localhost:8001/category/';
    var standardOptions = {
      paramSerializer: bankingHttpSerializer
    };

    var dao = {
      get  : get,
      query: query
    };

    return dao;

    function get( id ) {
      return $http.get( baseHref + id, standardOptions )
        .then( function( response ) {
          return response.data;
        }, function( err ) {
          $log.error( 'Error: categoryDAO.get(' + id + '): ', err );
          return $q.reject( err );
        } )
    }

    function query( criteria ) {
      var options = _.assign( {}, standardOptions, { params: criteria } );
      return $http.get( baseHref, options )
        .then( function( response ) {
          return response.data;
        }, function( err ) {
          $log.error( 'Error: categoryDAO.query(): ', err );
          return $q.reject( err );
        } );
    }
  }
})( angular );