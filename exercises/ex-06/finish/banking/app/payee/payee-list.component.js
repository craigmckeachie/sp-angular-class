(function( angular ) {
  /*
   * The payeeList component will have a list of transactions sent to it
   * by property binding, instead of requiring payeeMain
   *
   * Remove the require configuration
   * Remove (or comment out) the $onInit function
   *
   * Replace it with a bindings configuration which expects a one-way data-bound
   * set of Payees from the property "payees"
   *
   * Then go to payee-main.component.html and pass the payees from that component
   * to this one.
   *
   */

  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      bindings   : {
        payees: '<'
      }
    } );

  function PayeeListController( $stateParams ) {
    var ctrl = this;

    ctrl.selectPayee = selectPayee;

    function selectPayee( payee ) {
      ctrl.selectedPayee = payee;
    }

  }
})( angular );