(function( angular ) {
  angular.module( 'payee.component', [ 'payee.dao', 'payee.list', 'payee.detail',
    'payee.search', 'payee.utils', 'directives.getList', 'directives.linkedSelect', 'ui.router' ] )
    .component( 'payeeComponent', {
      templateUrl: 'app/payee/payee-component-tpl.html',
      controller : PayeeComponentController
    } );

  function PayeeComponentController( $log, $state, payeeDAO ) {
    var ctrl = this;

    ctrl.swapToList = swapToList;
    ctrl.swapToDetail = swapToDetail;
    ctrl.getById = getById;
    ctrl.search = search;

    function swapToList( criteria ) {
      $state.go( 'payees.list', criteria );
    }

    function swapToDetail( payee ) {
      ctrl.payee = payee;
      $state.go( 'payees.detail', { payeeId: ctrl.payee.payeeId } );
    }

    function getById( payeeId ) {
      return payeeDAO.get( payeeId );
    }

    function search( criteria ) {
      return payeeDAO.query( criteria );
    }
  }
})
( angular );