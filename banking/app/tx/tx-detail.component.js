(function( angular ) {
  angular.module( 'tx' )
    .component( 'txDetail', {
      templateUrl: 'app/tx/tx-detail.component.html',
      controller : TxDetailController,
      bindings   : {
        tx: '<'
      }
    } );

  function TxDetailController( $log, account ) {
    $log.log( 'TxDetailController called.' );
    var ctrl = this;

    ctrl.foo = 'bar';
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;

    function onInit() {
      $log.log( 'TxDetailController.$onInit() called.' );
    }

    function onChanges( changes ) {
      $log.log( 'TxDetailController.$onChanges() called.' );
      if ( changes.tx && changes.tx.currentValue ) {
        var tx = changes.tx.currentValue;
        if ( !angular.isDefined( tx.accountName ) ) {
          tx.accountName = account.getAccountName( tx.accountId );
        }
      }
    }

  }
})( angular );