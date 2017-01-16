/*
 * Create a directive, gs-linked, which can watch another element's value
 * When that element's value changes, this directive should update
 * Specifically, this directive will watch the states drop-down
 * When it changes, this directive should update with the list of cities
 * in that state
 *
 * The directive should be restricted to being an attribute
 * The attribute will be passed the name of the field to watch
 * When the field value changes, use payeeDAO's getCitiesForState method
 * to fetch a list of cities based on the current state.
 * Iterate over the list of cities and generate the content of the select list
 * based on the list of cities.
 *
 * For simplicity's sake, you can do all of this in the link function, instead of separating the
 * DAO work into a controller
 *
 * Then go to payee-search-tpl.html and follow the directions there.
 */
(function( angular ) {
  angular.module( 'directives.linkedSelect', [ 'payee.dao' ] )
      .directive( 'gsLinked', gsLinkedDirective );

  function gsLinkedDirective( $log, payeeDAO ) {
    return {
      bindToController: true,
      controllerAs: '$ctrl',
      restrict: 'A',
      link: function( scope, element, attrs ) {
        scope.$watch( attrs.gsLinked, function( newValue ) {
          if ( newValue ) {
            var optionsList = '<option value="">Please select a city</option>';
            payeeDAO.getCitiesForState( newValue )
                .then( function( cities ) {
                  cities.forEach( function( city ) {
                    optionsList += '<option>' + city + '</option>';
                  } );

                  element.html( optionsList );
                } );
          }
        } )
      }
    }
  }
})( angular );