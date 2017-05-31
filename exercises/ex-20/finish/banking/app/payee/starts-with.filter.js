/*
 * Write a filter, startsWith. It should take two arguments:
 * + input: An array of objects
 * + A config object which consists of field names and values
 *
 * If any arguments are missing, return the input array.
 *
 * Go over each element. Check it against the config object. If any of the fields
 * in the config object have values that the element's corresponding field does
 * NOT start with, filter that element OUT. Otherwise, filter it IN.
 *
 * Then go to payee-list.component.html.
 *
 */
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
