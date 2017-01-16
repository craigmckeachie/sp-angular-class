(function( angular ) {
  angular.module( 'tx.detail', [ 'account.lookup' ] )
      .component( 'txDetail', {
        templateUrl: 'app/tx/tx-detail-tpl.html',
        controller: TxDetailController,
        require: {
          txComponent: '^^txComponent'
        },
        bindings: {
          tx: '<?'
        }
      } );

  function TxDetailController( $log, $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      if ( $stateParams.txId && !ctrl.tx ) {
        updateTx( $stateParams.txId );
      } else if ( $stateParams.txId !== ctrl.tx.txId ) {
        updateTx( $stateParams.txId );
      }
    }

    function updateTx( txId ) {
      ctrl.txComponent.getById( txId )
          .then( function( tx ) {
            ctrl.tx = tx;
          } );
    }
  }
})( angular );