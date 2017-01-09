(function( angular ) {
  angular.module( 'tx' )
      .component( 'txList', {
        templateUrl: 'app/tx/tx-list.component.html',
        controller: TxListController,
        require: {
          txComponent: '^^txMain'
        },
        bindings: {
          transactions: '<?',
          onSelect: '&'
        }
      } );

  function TxListController( $stateParams, txUtils, $log ) {
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

      var criteria = txUtils.paramsToCriteria($stateParams);
      var criteriaKeys = Object.keys( criteria );
      if (criteriaKeys.length === 0) {
        // Do nothing, but don't do any of the below
      } else if ( criteriaKeys.length >= 1 && !ctrl.transactions ) {
        updateTx( criteria );
      } else if ( !txUtils.sameParams( criteria ) ) {
        updateTx( criteria );
      }
    }

    function onChanges( changesObj ) {
      $log.log( 'TxListController.$onChanges(): Changes obj:', changesObj );
      Object.keys( changesObj ).forEach( function( changed ) {
        var msg = changed + ' was changed';

        if ( changesObj[ changed ].isFirstChange() ) {
          msg += ' for the first time';
        } else {
          msg += ' from ' + changesObj[ changed ].previousValue + ' to ' + changesObj[ changed ].currentValue;
        }
        $log.log( msg )
      } );

      // Flag for whether to display results
      ctrl.noTx = ctrl.transactions && ctrl.transactions.length === 0;
    }

    function postLink() {
      $log.log( 'TxListController.$postLink()' );
    }

    function onDestroy() {
      $log.log( 'TxListController.$onDestroy()' );
    }

    function updateTx( criteria ) {
      ctrl.txComponent.search( criteria )
          .then( function( results ) {
            ctrl.transactions = results;
          } )
    }

    function callSelect( clickedTx ) {
      ctrl.onSelect( { tx: clickedTx } )
    }

    function toggleSort(field) {
      if (ctrl.sortField === field) {
        ctrl.sortField = '-' + field;
      } else {
        ctrl.sortField = field;
      }
    }
  }
})( angular );