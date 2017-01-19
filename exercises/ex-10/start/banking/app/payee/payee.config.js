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