(function( angular ) {
  angular.module( 'payee' )
    .factory( 'payeeDAO', payeeDAO );

  function payeeDAO( $http, $log, $q ) {
    var baseHref = 'http://localhost:8001/payee/',
        citiesByState = {},
        states = [];

    var dao = {
      get: get,
      query: query,
      getCitiesForState: getCitiesForState,
      getStates: getStates
    };

    return dao;

    function get( id ) {
      return $http.get( baseHref + id )
          .then( function( response ) {
            return response.data;
          }, function( err ) {
            $log.error( 'Error: payeeDAO.get(' + id + '): ', err );
            throw new Error( err );
          } )
    }

    function query( criteria ) {
      return $http.get( baseHref, { params: criteria } )
          .then( function( response ) {
            return response.data;
          }, function( err ) {
            $log.error( 'Error: payeeDAO.query(): ', err );
            return $q.reject( err );
          } )
    }

    function getStates() {
      var uniqueStates = [];
      if (states.length === 0) {
        return query()
            .then(function(payees) {
              payees.forEach(function(payee) {
                if (uniqueStates.indexOf(payee.state) === -1) {
                  uniqueStates.push( payee.state );
                }
              });
              states = uniqueStates;

              return states;
            })

      } else {
        return $q.resolve( states );
      }
    }

    function getCitiesForState( state ) {
      var uniqueCities = [];
      if ( !citiesByState[ state ] ) {
        return query( { state: state } )
            .then( function( results ) {
              results.forEach( function( payee ) {
                if ( uniqueCities.indexOf( payee.city ) === -1 ) {
                  uniqueCities.push( payee.city );
                }
              } );

              citiesByState[ state ] = uniqueCities;
              return uniqueCities;
            } );
      } else {
        return $q.resolve( citiesByState[ state ] );
      }
    }
  }
})( angular );