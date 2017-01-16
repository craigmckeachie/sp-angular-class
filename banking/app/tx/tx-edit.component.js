(function( angular ) {
  angular.module( 'tx' )
    .component( 'txEdit', {
      templateUrl: 'app/tx/tx-edit.component.html',
      controller : TxEditController,
      bindings   : {
        tx : '<?',
        onSave: '&',
        add: '@'
      }
    } );

  function TxEditController($log) {
    var ctrl = this;
    ctrl.save = save;

    function save(tx) {
      ctrl.onSave( { tx: tx } );
    }
  }

})( angular );