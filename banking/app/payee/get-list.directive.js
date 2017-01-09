(function( angular ) {
  angular.module( 'payee.directives', [ 'payee' ] )
      .directive( 'getList', getListDirective );

  function getListDirective() {
    return {
      restrict: 'A',
      bindToController: true,
      controllerAs: '$ctrl',
      scope: {
        getList: '@'
      },
      controller: function( payeeDAO, $q ) {
        var ctrl = this;

        ctrl.getStates = function() {
          if ( !ctrl.states ) {
            return payeeDAO.getStates()
                .then( function( states ) {
                  ctrl.states = states;
                  return ctrl.states;
                } );
          } else {
            return $q.resolve( ctrl.states );
          }
        };
      },

      link: function( scope, element, attrs, ctrl ) {
        var optionsList = '';
        if ( attrs.getList === 'states' ) {
          optionsList = '<option value="">Please select a state</option>';
          ctrl.getStates()
              .then( function( states ) {
                states.forEach( function( state ) {
                  optionsList += '<option>' + state + '</option>';
                  element.html( optionsList );
                } );
              } );
        }
      }
    }
  }
})( angular );