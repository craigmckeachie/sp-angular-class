(function( angular ) {
  angular.module( 'payee.detail', [] )
      .component( 'payeeDetail', {
        templateUrl: 'app/payee/payee-detail-tpl.html',
        controller: PayeeDetailController,
        require: {
          payeeComponent: '^^payeeComponent'
        },
        bindings: {
          payee: '<?'
        }
      } );

  function PayeeDetailController( $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      if ( $stateParams.payeeId && !ctrl.payee ) {
        updatePayee( $stateParams.payeeId );
      } else if ( Number($stateParams.payeeId) !== ctrl.payee.payeeId ) {
        updatePayee( $stateParams.payeeId );
      }
    }

    function updatePayee( payeeId ) {
      ctrl.payee = ctrl.payeeComponent.getById( payeeId );
    }

  }
})( angular );