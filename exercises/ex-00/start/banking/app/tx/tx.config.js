(function( angular ) {
  angular.module( 'tx' )
    .config( txConfig );

  function txConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.when( '/tx', '/tx/search' );
    $stateProvider
      .state( 'tx.search', {
        url     : '/search',
        template: '<tx-search on-search="$ctrl.swapToList(criteria)"></tx-search>'
      } )
      .state( 'tx.list', {
        url     : '/list?{payee.payeeName_like}&{payeeId:int}&{accountId:int}&{category.categoryId:int}&{txType}&{txStatus}&{amount_lte}&{amount_gte}&{txDate_lte:date}&{txDate_gte:date}',
        template: '<tx-list transactions="$ctrl.transactions" on-select="$ctrl.swapToDetail(tx)"></tx-list>'
      } )
      .state( 'tx.detail', {
        url     : '/detail/{id:[0-9]+}',
        template: '<tx-detail tx="$ctrl.tx"></tx-detail>'
      } )
      .state( 'tx.edit', {
        url     : '/edit/{id:[0-9]+}',
        template: '<tx-edit tx="$ctrl.tx" on-save="$ctrl.save(tx)"></tx-edit>'
      } )
      .state( 'tx.add', {
        url     : '/add',
        template: '<tx-edit add="true" on-save="$ctrl.save(tx)"></tx-edit>'
      } )

  }
})( angular );