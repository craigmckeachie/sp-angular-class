(function( angular ) {
  angular.module( 'tx.search', [] )
      .component( 'txSearch', {
        templateUrl: 'app/tx/tx-search-tpl.html',
        controller: TxSearchController,
        bindings: {
          onSearch: '&'
        }
      } );

  function TxSearchController() {
    var ctrl = this;

    ctrl.search = search;

    function search( searchForm ) {
      ctrl.onSearch( { criteria: searchForm } );
    }
  }
})( angular );