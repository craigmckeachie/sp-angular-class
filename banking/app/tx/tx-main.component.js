(function( angular ) {
  angular.module( 'tx' )
    .component( 'txMain', {
      templateUrl: 'app/tx/tx-main.component.html',
      controller : TxMainController
    } );

  function TxMainController( $log, $state, txDAO ) {
    var ctrl = this;

    ctrl.swapToList = swapToList;
    ctrl.swapToDetail = swapToDetail;
    ctrl.getById = getById;
    ctrl.search = search;

    function swapToList( criteria ) {
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