(function( angular ) {
  angular.module( 'tx' )
    .component( 'txMain', {
      templateUrl: 'app/tx/tx-main.component.html',
      controller : TxMainController
    } );

  function TxMainController( $log, $state, $stateParams, txDAO, account ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.swapToList = swapToList;
    ctrl.swapToDetail = swapToDetail;
    ctrl.save = save;

    function onInit() {

      // What if we go to txDetail without going to txList?
      if ( ( $state.$current.name === 'tx.detail' || $state.$current.name === 'tx.edit' ) && !angular.isDefined( ctrl.tx ) ) {
        txDAO.get( $stateParams.id )
          .then( function( tx ) {
            ctrl.tx = tx;
            ctrl.tx.accountName = account.getAccountName( ctrl.tx.accountId );
          } )
      }

      // What if we go to txList without going to txSearch?
      if ( $state.$current.name === 'tx.list' && !angular.isDefined( ctrl.transactions ) ) {
        var criteria = angular.copy( $stateParams );
        delete criteria[ '#' ];
        txDAO.query( criteria )
          .then( function( transactions ) {
            ctrl.transactions = transactions;
          } )
      }
    }

    function swapToList( criteria ) {
      txDAO.query( criteria )
        .then( function( tx ) {
          ctrl.transactions = tx;
          $state.go( 'tx.list', criteria, { location: true } );
        } );
    }

    function swapToDetail( tx ) {
      ctrl.tx = tx;
      ctrl.tx.accountName = account.getAccountName( ctrl.tx.accountId );
      $state.go( 'tx.detail', { id: ctrl.tx.id } );
    }

    function save( tx ) {
      tx.accountId = +tx.accountId;
      txDAO.save( tx );
    }
  }
})
( angular );