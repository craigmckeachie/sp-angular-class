(function( angular ) {
  angular.module( 'banking.config', [ 'ui.router' ] )
      .config( BankingConfig );

  function BankingConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/tx/search' );
    $urlRouterProvider.when( '/tx', '/tx/search' );
    $urlRouterProvider.when( '/payees', '/payees/search' );
    $stateProvider
        .state( 'tx', {
          url: '/tx',
          template: '<tx-component></tx-component>'
        } )
        .state( 'tx.search', {
          url: '/search',
          template: '<tx-search on-search="$ctrl.search(criteria, true)"></tx-search>'
        } )
        .state( 'tx.list', {
          url: '/list?{payeeName}&{payeeId:int}&{accountId:int}&{categoryId:int}&{txType}&{txStatus}&{amount}&{amountLow}&{amountHigh}&{txDate:date}&{txDateLow:date}&{txDateHigh:date}',
          template: '<tx-list transactions="$ctrl.transactions" on-select="$ctrl.getDetail(tx, true)"></tx-list>'
        } )
        .state( 'tx.detail', {
          url: '/detail/{txId:[0-9]+}',
          template: '<tx-detail tx="$ctrl.tx"></tx-detail>'
        } )
        .state( 'payees', {
          url: '/payees',
          template: '<payee-main></payee-main>'
        } )
        .state( 'payees.search', {
          url: '/search',
          template: '<payee-search on-search="$ctrl.search(criteria, true)"></payee-search>'
        } )
        .state( 'payees.list', {
          url: '/list?{payeeId:int}&{payeeName}&{categoryId:int}&{city}&{state}',
          template: '<payee-list payees="$ctrl.payees" on-select="$ctrl.getDetail(payee, true)"></payee-list>'
        } )
        .state( 'payees.detail', {
          url: '/detail/{payeeId:[0-9]+}',
          template: '<payee-detail payee="$ctrl.payee"></payee-detail>'
        } )
        .state( 'categories', {
          url: '/categories',
          template: '<h2>Categories</h2>'
        } );
  }
})( angular );