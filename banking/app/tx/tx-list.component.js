(function( angular ) {
  angular.module( 'tx' )
    .component( 'txList', {
      templateUrl: 'app/tx/tx-list.component.html',
      controller : TxListController,
      bindings   : {
        transactions: '<',
        onSelect    : '&'
      }
    } );

  function TxListController( $log, $stateParams ) {
    var ctrl = this;

    $log.log( 'TxListController.creation' );
    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.$postLink = postLink;
    ctrl.$onDestroy = onDestroy;
    ctrl.callSelect = callSelect;
    ctrl.toggleSort = toggleSort;

    function onInit() {
      $log.log( 'TxListController.$onInit()' );
      $log.log('TxListController.stateParams: ', $stateParams)
    }

    function onChanges( changesObj ) {
      $log.log( 'TxListController.$onChanges(): Changes obj:', changesObj );
    }

    function postLink() {
      $log.log( 'TxListController.$postLink()' );
    }

    function onDestroy() {
      $log.log( 'TxListController.$onDestroy()' );
    }

    function callSelect( clickedTx ) {
      ctrl.onSelect( { tx: clickedTx } )
    }

    function toggleSort( field ) {
      if ( ctrl.sortField === field ) {
        ctrl.sortField = '-' + field;
      } else {
        ctrl.sortField = field;
      }
    }
  }
})( angular );