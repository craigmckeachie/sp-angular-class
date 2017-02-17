/*
 * Build a directive, get-list which does the following:
 * Populates a select list with elements from a data set
 * You could pass get-list states, or cities, or another data set
 * and the directive would return a list of options suitable for
 * using within a select list. For this exercise, we will only be able
 * to pass in "states" as a value
 *
 * Requirements
 * Restricted to being an attribute
 * Passed a single value of the name of the dataset to get
 * (At this point, it can only fetch states)
 * The controller should use the payeeDAO.getStates() method
 * to fetch a list of states, and then expose that list of
 * states on the controller itself
 *
 * The link function should require the controller, and use the controller's
 * getStates function to retrieve a list of states and build a set of <option>
 * tags from the list. Then, the link function should render that list
 * of options as the innerHTML of the element.
 *
 * Finally, go to payee-search.component.html to use the directive
 *
 */
(function( angular ) {
  angular.module( 'payee' )
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