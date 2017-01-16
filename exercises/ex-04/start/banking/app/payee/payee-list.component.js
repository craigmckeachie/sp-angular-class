(function( angular ) {
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