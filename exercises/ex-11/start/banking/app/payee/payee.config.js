/*
 * Objectives
 * * Add the payee-search component to the router configuration
 * * Build a payee-search component
 * * Add logic to payee-main to manage the new component
 *
 * Below, add a new state, payees.search
 * The template should be a payee-search component
 * You will pass it an on-search event handler
 * It will take an argument of $ctrl.searchHandler(criteria) (which you haven't
 * defined yet)
 *
 * Change the default route to /payees/search from /payees/list
 *
 * Then go to payee-search.component.js
 *
 * Test your code by navigating to http://localhost:8000/banking/#!/payees/search
 * and searching on "Yoyodyne" or "Legos" as the payeeName
 *
 */
(function( angular ) {
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