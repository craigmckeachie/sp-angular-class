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

  function PayeeListController( $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.callSelect = callSelect;

    function onInit() {
      if ( Object.keys( $stateParams ) > 1 ) {
        ctrl.payeeComponent.search( $stateParams );
      } else if ( !ctrl.payees ) {
        ctrl.txComponent.search();
      }
    }

    function callSelect( payee ) {
      ctrl.onSelect( { payee: payee } );
    }

  }
})( angular );