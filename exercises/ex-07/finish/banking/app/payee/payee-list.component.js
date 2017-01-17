(function( angular ) {
  /*
   * payeeList needs to notify a parent component (payeeMain in this case)
   * that a list item has been clicked on
   *
   * Add a binding for a callback named on-payee-select
   * Invoke the callback in the selectPayee() handler,
   * passing it the selectedPayee.
   *
   * Then return to payee-main.component.js
   *
   */

  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      bindings   : {
        payees       : '<',
        onPayeeSelect: '&'
      }
    } );

  function PayeeListController() {
    var ctrl = this;

    ctrl.selectPayee = selectPayee;

    function selectPayee( payee ) {
      ctrl.onPayeeSelect( { payee: payee } );
    }

  }
})( angular );