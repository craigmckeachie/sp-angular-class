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
      ctrl.notFound = false;
      if ( $stateParams.payeeId && !ctrl.payee ) {
        updatePayee( $stateParams.payeeId );
      } else if ( $stateParams.payeeId !== ctrl.payee.payeeId ) {
        updatePayee( $stateParams.payeeId );
      }
    }

    function updatePayee( payeeId ) {
      ctrl.payeeComponent.getById( payeeId )
          .then( function( payee ) {
            ctrl.payee = payee;
          }, function(err) {
            if (err.status === 404) {
              ctrl.notFound = true;
              ctrl.payeeId = $stateParams.payeeId;
            }
          } );
    }

  }
})( angular );