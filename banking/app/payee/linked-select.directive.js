(function( angular ) {
  angular.module( 'payee.directives', [ 'payee' ] )
    .directive( 'linkedSelect', linkedSelectDirective );

  function linkedSelectDirective( $log, payeeDAO ) {
    return {
      bindToController: true,
      controllerAs    : '$ctrl',
      restrict        : 'A',
      link            : function( scope, element, attrs ) {
        scope.$watch( attrs.linkedSelect, function( newValue ) {
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