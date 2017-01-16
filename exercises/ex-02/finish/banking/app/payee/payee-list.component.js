
(function( angular ) {
  /*
   * You will build out this component as follows
   *
   * Create a new angular module "payee.list" with no dependencies
   *
   * From that module, create a component, payeeList
   * It should have a templateUrl pointing to payee-list-tpl.html
   * (with an appropriate path)
   * It should require payeeComponent
   * It should have a controller, PayeeListComponentController
   *
   * In the controller, create a function, loadData
   * It should take no arguments, and, when invoked, should call
   * getPayees() on payeeComponent and then return the results
   *
   * Go to payee-list-tpl.html and follow the instructions there.
   *
   */

  angular.module( 'payee.list', [] )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list-tpl.html',
        require: {
          payeeComponent: '^payeeComponent'
        },
        controller: PayeeListController
      } );

  function PayeeListController() {
    var ctrl = this;

    ctrl.loadData = function() {
      ctrl.payees = ctrl.payeeComponent.getPayees();
    }
  }
})( angular );