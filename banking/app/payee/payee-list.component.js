(function( angular ) {
  angular.module( 'payee' )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list.component.html',
        controller: PayeeListController,
        require: {
          payeeComponent: '^^payeeMain'
        },
        bindings: {
          payees: '<',
          onSelect: '&'
        }
      } );

  function PayeeListController( $stateParams, payeeUtils, $log ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;
    ctrl.callSelect = callSelect;
    ctrl.toggleSort = toggleSort;

    function onInit() {
      $log.log( 'onInit' );
      var criteria = payeeUtils.paramsToCriteria($stateParams);
      var criteriaKeys = Object.keys( criteria );
      if (criteriaKeys.length === 0) {
        // Do nothing, but don't do any of the below
      } else if ( criteriaKeys.length >= 1 && !ctrl.payees ) {
        updatePayees( criteria );
      } else if ( !payeeUtils.sameParams( criteria ) ) {
        updatePayees( criteria );
      }
    }

    function onChanges() {
      $log.log( 'onChanges' );
      // Flag for whether to display results
      // ctrl.showPayees = !!ctrl.payees && ctrl.payees.length === 0;
      if (ctrl.payees) {
        $log.log( 'ctrl.payees.length: ', ctrl.payees.length );
      }
    }

    function updatePayees( criteria ) {
      ctrl.payees = [];
      ctrl.payeeComponent.search( criteria )
          .then( function( results ) {
            ctrl.payees = results;
          }, function(err) {
            ctrl.noPayees = true;
          } )
    }

    function callSelect( clickedPayee ) {
      ctrl.onSelect( { payee: clickedPayee } );
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