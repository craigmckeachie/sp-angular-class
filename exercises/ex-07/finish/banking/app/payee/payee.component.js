
/*
 * You will be moving code from here over to payee.dao.js
 * The specific directions of which code to move are in payee.dao.js
 * The details of the code you should add here are below, in
 * multi-line code blocks.
 */

(function( angular ) {
  angular.module( 'payee.component', [ 'payee.list', 'payee.detail', 'payee.search', 'payee.utils', 'payee.dao', 'ui.router' ] )
      .component( 'payeeComponent', {
        templateUrl: 'app/payee/payee-component-tpl.html',
        controller: PayeeComponentController
      } );

  /*
   * Add a dependency on payeeDAO
   * Remove any extraneous dependencies
   */
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

    /*
     * Move this code to the DAO
     * Replace it with the appropriate DAO call
     */
    function getById( payeeId ) {
      return payeeDAO.get( payeeId );
    }

    /*
     * Move this code to the DAO as well
     * Replace it with the appropriate DAO call
     */
    function search( criteria ) {
      return payeeDAO.query( criteria );
    }

    /*
     * Move this code to the DAO as well
     * Don't replace it at all.
     */

  }
})
( angular );