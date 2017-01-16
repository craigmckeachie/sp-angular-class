(function( angular ) {
  angular.module( 'tx' )
    .component( 'txEdit', {
      templateUrl: 'app/tx/tx-edit.component.html',
      controller : TxEditController,
      bindings   : {
        tx : '<?',
        add: '@'
      }
    } );

  function TxEditController($log) {
    var ctrl = this;
  }

})( angular );