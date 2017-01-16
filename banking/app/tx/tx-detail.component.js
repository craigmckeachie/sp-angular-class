(function( angular ) {
  angular.module( 'tx' )
    .component( 'txDetail', {
      templateUrl: 'app/tx/tx-detail.component.html',
      controller : TxDetailController,
      bindings   : {
        tx: '<'
      }
    } );

  function TxDetailController( ) {
    var ctrl = this;

  }
})( angular );