(function( angular ) {
  /*
   * Objectives
   * * Add routes for payee-list and payee-detail
   * * Update payee-main so that it has a placeholder for routing content
   * * Also update payee-main to have links to various routes
   *
   * Start here by adding routes for payee-list and payee-detail.
   *
   * Register this code as part of the payee module
   * Write a function and register it as a config block
   *
   * payee-list should be called payees.list (note singular vs plural)
   * The template should be about the same as it is currently in payee-main
   * payee-detail should be called payees.detail
   * Again, the template should be the same as it is currently in payee-main
   *
   * Make sure that payees.list is the default route
   *
   * Then go to payee-main.component.html (not JS!) and follow the directions there
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
        url     : '/detail/',
        template: '<payee-detail payee="$ctrl.payee"></payee-detail>'
      } )
  }
})( angular );