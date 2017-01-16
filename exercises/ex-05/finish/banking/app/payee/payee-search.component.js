(function( angular ) {
  angular.module( 'payee.search', [] )
      .component( 'payeeSearch', {
        templateUrl: 'app/payee/payee-search-tpl.html',
        controller: PayeeSearchController,
        bindings: {
          onSearch: '&'
        }
      } );

  function PayeeSearchController() {
    var ctrl = this;

    ctrl.search = search;

    function search( searchForm ) {
      ctrl.onSearch( { criteria: searchForm } );
    }

  }
})( angular );