(function( angular ) {
  angular.module( 'tx.list', [] )
      .component( 'txList', {
        templateUrl: 'app/tx/tx-list-tpl.html',
        controller: TxListController,
        require: {
          txComponent: '^^txComponent'
        },
        bindings: {
          transactions: '<?',
          onSelect: '&'
        }
      } );

  function TxListController( $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.callSelect = callSelect;

    function onInit() {
      ctrl.txComponent.search( $stateParams );
    }

    function callSelect( tx ) {
      ctrl.onSelect( { tx: tx } );
    }
  }
})( angular );