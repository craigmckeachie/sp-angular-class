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