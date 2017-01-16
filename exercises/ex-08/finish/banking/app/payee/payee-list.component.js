(function( angular ) {
  angular.module( 'payee.list', [] )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list-tpl.html',
        controller: PayeeListController,
        require: {
          payeeComponent: '^^payeeComponent'
        },
        bindings: {
          payees: '<',
          onSelect: '&'
        }
      } );

  function PayeeListController( $log, $stateParams, payeeUtils ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.callSelect = callSelect;

    function onInit() {
      $log.log( 'plc.$onInit()' );
      $log.log( 'ctrl.payees: ', ctrl.payees );

      var criteriaKeys = Object.keys( $stateParams );
      if ( criteriaKeys.length > 1 && !ctrl.payees ) {
        updatePayee( $stateParams );

      } else if ( !payeeUtils.sameParams( $stateParams ) ) {
        updatePayee( $stateParams );
      }
    }

    function callSelect( clickedPayee ) {
      ctrl.onSelect( { payee: clickedPayee } );
    }

    /*
     * The call to search() now returns a promise. Adjust this code accordingly
     */
    function updatePayee( criteria ) {
      ctrl.payees = [];
      ctrl.payeeComponent.search( criteria )
          .then(function( results ) {
            ctrl.payees = results.data;
          });
    }

  }
})( angular );