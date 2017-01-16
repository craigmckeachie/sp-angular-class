(function( angular ) {
  angular.module( 'tx.list', [] )
      .component( 'txList', {
        templateUrl: 'app/tx/tx-list-tpl.html',
        controller: TxListController,
        require: {
          txComponent: '^^txComponent'
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

    function onInit() {
      $log.log( 'TxListController.$onInit()' );
      txUtils.setCurrentParams( angular.copy( $stateParams ) );

      var criteriaKeys = Object.keys( $stateParams );
      if ( criteriaKeys.length > 1 && !ctrl.transactions ) {
        updateTx( $stateParams );
      } else if ( !angular.equals( txUtils.getCurrentParams(), txUtils.getLastParams() ) ) {
        updateTx( $stateParams );
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
  }
})( angular );