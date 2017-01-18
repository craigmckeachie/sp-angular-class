(function( angular ) {
  angular.module( 'payee.detail', [] )
    .component( 'payeeDetail', {
      templateUrl: 'app/payee/payee-detail-tpl.html',
      controller : PayeeDetailController,
      require    : {
        payeeComponent: '^^payeeComponent'
      },
      bindings   : {
        payee: '<?'
      }
    } );

  function PayeeDetailController( $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      if ( $stateParams.payeeId && !ctrl.payee ) {
        updatePayee( $stateParams.payeeId );
      } else if ( Number( $stateParams.payeeId ) !== ctrl.payee.payeeId ) {
        updatePayee( $stateParams.payeeId );
      }
    }

    /*
     * getById's promise now returns the payee directly.
     * Change this code to handle that
     */
    function updatePayee( payeeId ) {
      ctrl.payeeComponent.getById( payeeId )
        .then( function( results ) {
          ctrl.payee = results;
        } );
    }

  }
})( angular );