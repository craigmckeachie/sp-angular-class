(function( angular ) {
  angular.module( 'banking' )
    .config( bankingConfig );

  function bankingConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/tx/search' );
    $urlRouterProvider.when( '/tx', '/tx/search' );
    $urlRouterProvider.when( '/payees', '/payees/search' );
    $stateProvider
      .state( 'tx', {
        url     : '/tx',
        component: 'txMain'
      } )
      .state( 'payees', {
        url     : '/payees',
        template: '<payee-main></payee-main>'
      } )
      .state( 'payees.search', {
        url     : '/search',
        template: '<payee-search on-search="$ctrl.swapToList(criteria)"></payee-search>'
      } )
      .state( 'payees.list', {
        url     : '/list?{payeeId:int}&{payeeName}&{categoryId:int}&{city}&{state}',
        template: '<payee-list payees="$ctrl.payees" on-select="$ctrl.swapToDetail(payee)"></payee-list>'
      } )
      .state( 'payees.detail', {
        url     : '/detail/{payeeId:[0-9]+}',
        template: '<payee-detail payee="$ctrl.payee"></payee-detail>'
      } )
      .state( 'categories', {
        url     : '/categories',
        template: '<h2>Categories</h2>'
      } );
  }

})( angular );