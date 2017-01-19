(function( angular ) {
  /*
   * Add a dependency on payeeDAO to the controller
   * When this component needs payees, determine whether to use payeeDAO.get()
   * or payeeDAO.query() as appropriate
   *
   * Specifically, onInit() and searchHandler() should be modified.
   *
   */
  angular.module( 'payee' )
    .component( 'payeeMain', {
      templateUrl: 'app/payee/payee-main.component.html',
      controller : PayeeMainController
    } );

  function PayeeMainController( $log, $state, $stateParams, payeeDAO ) {
    var ctrl = this;
    ctrl.componentName = 'payeeMain';

    ctrl.selectPayee = selectPayee;
    ctrl.searchHandler = searchHandler;
    ctrl.$onInit = onInit;

    function searchHandler( criteria ) {
      ctrl.payees = payeeDAO.query( criteria );
      $state.go( 'payees.list' );
    }

    function selectPayee( payee ) {
      ctrl.payee = payee;
    }

    function onInit() {
      ctrl.payees = payeeDAO.query();

      if ( $state.$current.name === 'payees.detail' && !angular.isDefined( ctrl.payee ) ) {
        ctrl.payee = payeeDAO.get( $stateParams.id );
      }
    }
  }
})( angular );