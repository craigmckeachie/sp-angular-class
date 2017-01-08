(function( angular ) {
  angular.module( 'tx.component', [ 'tx.dao', 'tx.search', 'tx.list', 'tx.detail', 'tx.utils', 'ui.router' ] )
      .component( 'txComponent', {
        templateUrl: 'app/tx/tx-component-tpl.html',
        controller: TxComponentController
      } );

  function TxComponentController( $log, $state, txDAO ) {
    var ctrl = this;

    ctrl.swapToList = swapToList;
    ctrl.swapToDetail = swapToDetail;
    ctrl.getById = getById;
    ctrl.search = search;

    function swapToList( criteria, go ) {
      $state.go( 'tx.list', criteria );
    }

    function swapToDetail( tx ) {
      ctrl.tx = tx;
      $state.go( 'tx.detail', { txId: ctrl.tx.txId } );
    }

    function getById( txId ) {
      return txDAO.get( txId );
    }

    function search( criteria ) {
      return txDAO.query( criteria );
    }
  }
})
( angular );