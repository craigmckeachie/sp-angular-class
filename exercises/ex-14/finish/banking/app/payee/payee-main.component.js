(function( angular ) {
  /*
   * Update searchHandler so that query now returns a promise and
   * data is accessed via that promise
   *
   * Do the same for onInit's calls to query() and get()
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
      payeeDAO.query( criteria )
        .then( function( response ) {
          ctrl.payees = response.data;
          $state.go( 'payees.list' );
        } );
    }

    function selectPayee( payee ) {
      ctrl.payee = payee;
    }

    function onInit() {
      payeeDAO.query()
        .then( function( response ) {
          ctrl.payees = response.data;
        } );

      if ( $state.$current.name === 'payees.detail' && !angular.isDefined( ctrl.payee ) ) {
        payeeDAO.get( $stateParams.id )
          .then( function( response ) {
            ctrl.payee = response.data;
          } );
      }
    }
  }
})( angular );