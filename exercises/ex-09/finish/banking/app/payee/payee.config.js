(function( angular ) {
  /*
   * Objectives
   * * Add parameters to the payees.detail route
   * * Add parameter handling code to payee-detail and payee-main
   *
   * Add a parameter to payees.detail
   * The parameter should be called "id" and should be an integer
   *
   * Then go to payee-main.component.js
   *
   * When you are finished, load http://localhost:8000/banking/#!/payees
   * in your browser to test the results
   *
   */

  angular.module( 'payee' )
    .config( payeeConfig );

  function payeeConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.when( '/payees', '/payees/list' );
    $stateProvider
      .state( 'payees.list', {
        url     : '/list',
        template: '<payee-list payees="$ctrl.payees" on-payee-select="$ctrl.selectPayee(payee)"></payee-list>'
      } )
      .state( 'payees.detail', {
        url     : '/detail/{id:int}',
        template: '<payee-detail payee="$ctrl.payee"></payee-detail>'
      } )
  }
})( angular );