(function( angular ) {
  angular.module( 'directives.getList', [ 'payee.dao' ] )
      .directive( 'gsGetList', gsGetListDirective );

  function gsGetListDirective() {
    return {
      restrict: 'A',
      bindToController: true,
      controllerAs: '$ctrl',
      scope: {
        gsGetList: '@'
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
        if ( attrs.gsGetList === 'states' ) {
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