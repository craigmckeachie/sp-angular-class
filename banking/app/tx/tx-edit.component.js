(function( angular ) {
  angular.module( 'tx' )
    .component( 'txEdit', {
      templateUrl: 'app/tx/tx-edit.component.html',
      controller : TxEditController,
      bindings   : {
        tx    : '<?',
        onSave: '&',
        add   : '@?'
      }
    } );

  function TxEditController( $log ) {
    var ctrl = this;
    ctrl.save = save;
    ctrl.$onInit = onInit;

    function save( tx ) {
      ctrl.onSave( { tx: tx } );
    }

    function onInit() {
      console.log( ctrl );
      if ( ctrl.add === "true" ) {
        ctrl.tx = {};
      }
      console.log( ctrl );
    }
  }

})( angular );