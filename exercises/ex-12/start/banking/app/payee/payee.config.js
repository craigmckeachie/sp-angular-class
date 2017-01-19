(function( angular ) {
  angular.module( 'payee' )
    .config( payeeConfig );

  function payeeConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.when( '/payees', '/payees/search' );
    $stateProvider
      .state( 'payees.list', {
        url     : '/list',
        template: '<payee-list payees="$ctrl.payees" on-payee-select="$ctrl.selectPayee(payee)"></payee-list>'
      } )
      .state( 'payees.detail', {
        url     : '/detail/{id:int}',
        template: '<payee-detail payee="$ctrl.payee"></payee-detail>'
      } )
      .state( 'payees.search', {
        url     : '/search',
        template: '<payee-search on-search="$ctrl.searchHandler(criteria)"></payee-search>'
      } )
  }
})( angular );