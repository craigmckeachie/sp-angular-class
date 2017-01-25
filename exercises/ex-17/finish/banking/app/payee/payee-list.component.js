(function( angular ) {
  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      bindings   : {
        payees       : '<',
        onPayeeSelect: '&'
      }
    } );

  function PayeeListController( $log ) {
    var ctrl = this;

    ctrl.selectPayee = selectPayee;
    ctrl.findAll = findAll;
    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.originalSet = ctrl.payees;
    }

    function selectPayee( payee ) {
      ctrl.onPayeeSelect( { payee: payee } );
    }

    /*
     * We have added this function for testing and UI purposes
     * Click on either the city or state field in the payeeList view, and the
     * list will auto-filter to only that city or state.
     * Click on the same field again, and the payeeList view will go back
     * to the original set of data
     *
     */
    function findAll( field, payee, event ) {

      // If we're on the reduced set, restore the original set.
      if ( ctrl.payees !== ctrl.originalSet ) {
        ctrl.payees = ctrl.originalSet;
        event.stopPropagation();
        return;
      }

      var search = { field: field, value: payee[ field ] };

      ctrl.payees = ctrl.payees.filter( function( payee ) {
        if ( payee[ search.field ].indexOf( search.value ) > -1 ) {
          return true;
        }
      } );

      event.stopPropagation();
    }

  }
})( angular );