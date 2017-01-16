(function( angular ) {
  /*
   * Add a bindings configuration which accepts the following:
   * payees as a one-way data binding
   * onPick as a function
   *
   * Go to payee-list-tpl.html, complete work there, then come back here.
   *
   * Now define a function, ctrl.picked (use the revealing module pattern)
   * It should take a payee as an argument and invoke the onPick callback
   * function, passing along the payeeId of the picked payee
   *
   * Go to payee-detail.component.js.
   */
  angular.module( 'payee.list', [] )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list-tpl.html',
        require: {
          payeeComponent: '^payeeComponent'
        },
        bindings: {
          payees: '<',
          onPick: '&'
        },
        controller: PayeeListController
      } );

  function PayeeListController() {
    var ctrl = this;

    ctrl.picked = picked;

    function picked( payee ) {
      ctrl.onPick( { payeeId: payee.payeeId } );
    }

  }
})( angular );