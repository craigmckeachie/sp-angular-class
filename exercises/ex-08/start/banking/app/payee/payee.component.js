/*
 * The getById() and search() functions both make calls to payeeDAO.
 * Now, those calls to payeeDAO return promises
 *
 * You don't have to change getById() and search() here. But you will need to
 * change them where they are being used.
 * For getById(), look at payee-detail.component.js
 * For search(), look at payee-list.component.js
 *
 *
 */

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