(function( angular ) {

  angular.module( 'tx.dao', ['account.lookup'] )
      .factory( 'txDAO', txDAO );

  function txDAO( $http, $log, account ) {
    var baseHref = 'http://localhost:7100/banking/tx/';

    var dao = {
      get: get,
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
            throw new Error( err );
          } )
    }

    function query( criteria ) {
      return $http.get( baseHref, { params: criteria } )
          .then( function( response ) {
            return response.data;
          }, function( err ) {
            $log.error( 'Error: txDAO.query(): ', err );
            throw new Error( err );
          } )
    }

  }
})( angular );