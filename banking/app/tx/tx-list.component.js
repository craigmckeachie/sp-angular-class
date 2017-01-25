(function( angular ) {
  angular.module( 'tx' )
    .component( 'txList', {
      templateUrl: 'app/tx/tx-list.component.html',
      controller : TxListController,
      bindings   : {
        transactions: '<',
        onSelect    : '&',
        onFindOthers: '&'
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
    ctrl.findAll = findAll;

    function onInit() {
      $log.log( 'TxListController.$onInit()' );
      $log.log( 'TxListController.stateParams: ', $stateParams );

      // See findAll for why we're caching this here.
      ctrl.originalSet = ctrl.transactions;
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

    function findAll( field, tx, event ) {

      // If we're on the reduced set, restore the original set.
      if ( ctrl.transactions !== ctrl.originalSet ) {
        ctrl.transactions = ctrl.originalSet;
        event.stopPropagation();
        return;
      }

      var search = { field: field };
      if ( field === 'txDate' ) {
        search.field = field;
        search.value = tx.txDate.match( /(.+)T/ )[ 1 ]
      } else if ( field === 'category.categoryName' ) {
        search.value = tx.category.categoryName;
      }

      ctrl.transactions = ctrl.transactions.filter( function( tx ) {
        var searchSpace;
        if ( search.field.indexOf( '.' ) > -1 ) {
          var fields = search.field.split( '.' );

          // Assumes only one sub-field
          searchSpace = tx[ fields[ 0 ] ][ fields[ 1 ] ];
        } else {
          searchSpace = tx[ search.field ];
        }

        if ( searchSpace.indexOf( search.value ) === 0 ) {
          return true;
        }
      } );

      event.stopPropagation();
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