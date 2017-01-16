(function( angular ) {

  angular.module( 'tx' )
    .factory( 'txDAO', txDAO );

  function txDAO( $http, $log, account, $q, bankingHttpSerializer, _ ) {
    var baseHref = 'http://localhost:8001/tx/';
    var standardOptions = {
      paramSerializer: bankingHttpSerializer
    };

    var dao = {
      get  : get,
      query: query,
      save : save,
      add  : add
    };

    return dao;

    function get( id ) {
      return $http.get( baseHref + id, standardOptions )
        .then( function( response ) {
          response.data.accountName = account.getAccountName( response.data.accountId );
          return response.data;
        }, function( err ) {
          $log.error( 'Error: txDAO.get(' + id + '): ', err );
          return $q.reject( err );
        } )
    }

    function query( criteria ) {
      var options = _.assign( {}, standardOptions, { params: criteria } );
      return $http.get( baseHref, options )
        .then( function( response ) {
          return response.data;
        }, function( err ) {
          $log.error( 'Error: txDAO.query(): ', err );
          return $q.reject( err );
        } );
    }

    function save( tx ) {
      if ( !tx.id ) {
        return dao.add( tx );
      }

      return $http.put( baseHref + tx.id, tx )
        .then( function( returnedTx ) {
          console.log( 'returnedTx: ', returnedTx );
        } )
    }

    function add( tx ) {
      return $http.post( baseHref, tx )
        .then( function( returnedTx ) {
          console.log( 'returnedTx: ', returnedTx );
        } );
    }
  }
})( angular );