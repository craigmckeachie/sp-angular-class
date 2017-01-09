(function( angular ) {
  angular.module( 'tx' )
    .config( txConfig );

  function txConfig( $stateProvider, $urlRouterProvider ) {
    $stateProvider
      .state( 'tx.search', {
        url     : '/search',
        template: '<tx-search on-search="$ctrl.swapToList(criteria)"></tx-search>'
        // resolve: '<tx-search on-search="$ctrl.swapToList(criteria)"></tx-search>'
      } )
      .state( 'tx.list', {
        url     : '/list?{payee.payeeName}&{payeeId:int}&{accountId:int}&{categoryId:int}&{txType}&{txStatus}&{amount}&{amountLow}&{amountHigh}&{txDate:date}&{txDateLow:date}&{txDateHigh:date}',
        template: '<tx-list transactions="$ctrl.transactions" on-select="$ctrl.swapToDetail(tx)"></tx-list>'
      } )
      .state( 'tx.detail', {
        url     : '/detail/{txId:[0-9]+}',
        template: '<tx-detail tx="$ctrl.tx"></tx-detail>'
      } )

  }
})( angular );