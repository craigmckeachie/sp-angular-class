(function( angular ) {
  angular.module( 'payee.component', [ 'payee.list', 'payee.detail', 'payee.search', 'payee.utils', 'payee.dao', 'ui.router' ] )
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
      $log.log( 'pcc.swapToList()' );
      ctrl.payees = search( criteria );
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