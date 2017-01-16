/*
 * The directions are interspersed throughout this document, look for comments
 * that start with the multi-line comment indicator: /*
 */
(function( angular ) {
  angular.module( 'payee.list', [] )
      .component( 'payeeList', {
        templateUrl: 'app/payee/payee-list-tpl.html',
        controller: PayeeListController,
        require: {
          payeeComponent: '^^payeeComponent'
        },
        bindings: {
          payees: '<',
          onSelect: '&'
        }
      } );

  /*
   * Add a dependency on payeeUtils here
   */
  function PayeeListController( $log, $stateParams ) {
    var ctrl = this;

    ctrl.$onInit = onInit;
    ctrl.callSelect = callSelect;

    function onInit() {
      $log.log( 'plc.$onInit()' );
      $log.log( 'ctrl.payees: ', ctrl.payees );

      var criteriaKeys = Object.keys( $stateParams );
      if ( criteriaKeys.length > 1 && !ctrl.payees ) {
        updatePayee( $stateParams );

        /*
         * Add an else if that runs updatePayee() if payeeUtils.sameParams, passed
         * $stateParams, returns false
         */
      }

    }

    function callSelect( clickedPayee ) {
      ctrl.onSelect( { payee: clickedPayee } );
    }

    function updatePayee( criteria ) {
      /*
       * Run criteria through payeeUtils.paramsToCriteria() before it goes to
       * ctrl.payeeComponent.search()
       */



      ctrl.payees = ctrl.payeeComponent.search( criteria );
    }

  }
})( angular );