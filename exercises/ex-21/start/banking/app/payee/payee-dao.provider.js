(function( angular ) {

  angular.module( 'payee' )
    .factory( 'payeeDAO', function( $filter, $http ) {
      var baseUrl = 'http://localhost:8001/payee/',
        citiesByState = {},
        states = [],
        filter = $filter( 'filter' );

      return {
        get      : get,
        query    : query,
        getStates: getStates
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

      function getStates() {
        var uniqueStates = [];
        if ( states.length === 0 ) {
          return query()
            .then( function( payees ) {
              payees.forEach( function( payee ) {
                if ( uniqueStates.indexOf( payee.state ) === -1 ) {
                  uniqueStates.push( payee.state );
                }
              } );
              states = uniqueStates;
              states.sort();
              return states;
            } )

        } else {
          return $q.resolve( states );
        }
      }

    } )
})( angular );
