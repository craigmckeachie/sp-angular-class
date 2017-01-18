(function( angular ) {
  /*
   * Build the the Payee list component
   * Its name is payeeList
   * The template is found at payee-list.component.html
   * Add a controller
   * require the main Payee component, which should be an ancestor of this component
   *
   * In the controller, add an $onInit lifecycle event where this component
   * retrieves the list of Payees from the main Payee component
   *
   * Also, move the event handling code from payee-main.component here
   *
   * When you are done, go to payee-main.component.html
   *
   */

  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      require    : {
        payeeMain: '^^payeeMain'
      }
    } );

  function PayeeListController() {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.selectPayee = selectPayee;

    function onInit() {
      ctrl.payees = ctrl.payeeMain.getPayees();
    }

    function selectPayee( payee ) {
      ctrl.selectedPayee = payee;
    }

  }
})( angular );