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

  function TxDetailController( $stateParams, account ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;

    function onInit() {
      ctrl.txComponent.getDetail( $stateParams.txId );
    }

    function onChanges( changeObj ) {
      if ( !changeObj[ 'tx' ].isFirstChange() ) {
        ctrl.tx.accountName = account.getAccountName( changeObj['tx'].currentValue.accountId );
      }
    }
  }
})( angular );