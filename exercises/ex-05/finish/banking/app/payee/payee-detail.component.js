(function( angular ) {
  angular.module( 'payee.detail', [] )
      .component( 'payeeDetail', {
        templateUrl: 'app/payee/payee-detail-tpl.html',
        controller: PayeeDetailController,
        require: {
          payeeComponent: '^^payeeComponent'
        },
        bindings: {
          payee: '<'
        }
      } );

  function PayeeDetailController( $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.payeeComponent.getDetail( $stateParams.payeeId );
    }

  }
})( angular );