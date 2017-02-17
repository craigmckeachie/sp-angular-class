(function( angular ) {
  angular.module( 'payee' )
    .filter( 'startsWith', startsWithFilter );

  function startsWithFilter() {
    return function( input, criteria ) {
      if ( !input || !criteria ) {
        return input;
      }

      var filterKeys = Object.keys( criteria );

      return input.filter( function( item ) {
        var filterIn = true;
        filterKeys.some( function( filterKey ) {
          if ( !item[ filterKey ] ) {
            filterIn = false;
            return true;
          }

          if ( !item[ filterKey ].toUpperCase().startsWith( criteria[ filterKey ].toUpperCase() ) ) {
            filterIn = false;
            return true;
          }
        } );

        return filterIn;
      } )
    }
  }
})( angular );
