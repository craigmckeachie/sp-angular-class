(function( angular ) {

  angular.module( 'tx' )
    .factory( 'txDAO', txDAO );

  function txDAO( $http, $log, account, $q ) {
    var baseHref = 'http://localhost:8001/tx/';

    var dao = {
      get  : get,
      query: query
    };

    return dao;

    function get( id ) {
      return $http.get( baseHref + id )
        .then( function( response ) {
          response.data.accountName = account.getAccountName( response.data.accountId );
          return response.data;
        }, function( err ) {
          $log.error( 'Error: txDAO.get(' + id + '): ', err );
          return $q.reject( err );
        } )
    }

    function query( criteria ) {
      return $http.get( baseHref, { params: criteria } )
        .then( function( response ) {
          return response.data;
        }, function( err ) {
          $log.error( 'Error: txDAO.query(): ', err );
          return $q.reject( err );
        } )
    }
  }
})( angular );