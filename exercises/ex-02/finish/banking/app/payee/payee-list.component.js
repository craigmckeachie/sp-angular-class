
(function( angular ) {
  /*
   * You will build out this component as follows
   *
   * Register this component with the "payee" module
   *
   * Create a component, payeeList
   * It should have a templateUrl pointing to payee-list.component.html
   * (with an appropriate path)
   * It should require payeeMain
   * It should have a controller, PayeeListController
   *
   * In the controller, create a function, loadData
   * It should take no arguments, and, when invoked, should call
   * getPayees() on payeeMain and then return the results
   *
   * Go to payee-list.component.html and follow the instructions there.
   *
   */

  angular.module( 'payee' )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list.component.html',
        require: {
          payeeMain: '^payeeMain'
        },
        controller: PayeeListController
      } );

  function PayeeListController() {
    var ctrl = this;

    ctrl.loadData = function() {
      ctrl.payees = ctrl.payeeMain.getPayees();
    }
  }
})( angular );