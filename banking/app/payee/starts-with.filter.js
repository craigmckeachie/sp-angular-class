(function( angular ) {
  angular.module( 'payee' )
    .filter( 'startsWith', startsWithFilter );

  function startsWithFilter() {
    return function( input ) {
      return input;
    }
  }
})( angular );
