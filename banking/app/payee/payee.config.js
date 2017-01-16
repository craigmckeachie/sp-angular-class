(function( angular ) {
  angular.module( 'payee' )
    .config( payeeConfig );

  function payeeConfig( $stateProvider, $urlRouterProvider ) {
    $stateProvider
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
  }
})( angular );
