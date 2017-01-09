(function( angular ) {
  angular.module( 'tx' )
      .component( 'txDetail', {
        templateUrl: 'app/tx/tx-detail.component.html',
        controller: TxDetailController,
        require: {
          txComponent: '^^txComponent'
        },
        bindings: {
          tx: '<?'
        }
      } );

  function TxDetailController( $log, $stateParams, account ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.$onChanges= onChanges;

    function onInit() {
      ctrl.notFound = false;
      if ( $stateParams.txId && !ctrl.tx ) {
        updateTx( $stateParams.txId );
      } else if ( $stateParams.txId !== ctrl.tx.txId ) {
        updateTx( $stateParams.txId );
      }
    }

    function onChanges( changeObj ) {
      if ( !changeObj[ 'tx' ].isFirstChange() ) {
        ctrl.tx.accountName = account.getAccountName( changeObj['tx'].currentValue.accountId );
      }
    }

    function updateTx( txId ) {
      ctrl.txComponent.getById( txId )
          .then( function( tx ) {
            ctrl.tx = tx;
            ctrl.notFound = false;
          }, function(err) {
            if (err.status === 404) {
              ctrl.notFound = true;
              ctrl.txId = $stateParams.txId;
            }
          } );
    }
  }
})( angular );