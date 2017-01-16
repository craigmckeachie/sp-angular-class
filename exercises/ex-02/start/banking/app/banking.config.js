(function( angular ) {
  angular.module( 'banking.config', [ 'ui.router' ] )
      .config( BankingConfig );

  function BankingConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/tx/search' );
    $urlRouterProvider.when( '/tx', '/tx/search' );
    $stateProvider
        .state( 'tx', {
          url: '/tx',
          component: 'txComponent'
        } )
        .state( 'tx.search', {
          url: '/search',
          template: '<tx-search on-search="$ctrl.search(criteria, true)"></tx-search>'
        } )
        .state( 'tx.list', {
          url: '/list?{txId:int}&{payeeId:int}&{accountId:int}&{categoryId:int}&{txType}&{txStatus}&{amount}&{amountLow}&{amountHigh}&{txDate:date}&{txDateLow:date}&{txDateHigh:date}',
          template: '<tx-list on-select="$ctrl.getDetail(tx, true)" transactions="$ctrl.transactions"></tx-list>'
        } )
        .state( 'tx.detail', {
          url: '/detail/{txId:[0-9]+}',
          template: '<tx-detail tx="$ctrl.tx"></tx-detail>'
        } )
        .state( 'payees', {
          url: '/payees',
          component: 'payeeComponent'
        } )
        .state( 'categories', {
          url: '/categories',
          template: '<h2>Categories</h2>'
        } );
  }
})( angular );