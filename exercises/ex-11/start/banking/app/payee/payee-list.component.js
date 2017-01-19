(function( angular ) {
  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      bindings   : {
        payees       : '<',
        onPayeeSelect: '&'
      }
    } );

  function PayeeListController($log) {
    var ctrl = this;

    ctrl.selectPayee = selectPayee;

    function selectPayee( payee ) {
      ctrl.onPayeeSelect( { payee: payee } );
    }

  }
})( angular );