(function( angular ) {
/*
 * Build a payeeSearch component
 * The templateUrl is payee-search.component.html
 * The controller should be PayeeSearchController
 * Add a bindings configuration which can pass in a function called onSearch
 *
 * Then go to payee-search.component.html
 *
 * Having returned here from payee-search.component.html, build the
 * event handler called "search". In the handler, you should invoke
 * ctrl.onSearch, passing it the searchForm as "criteria"
 *
 * Then go to payee-main.component.js
 *
 */
  angular.module( 'payee' )
    .component( 'payeeSearch', {
      templateUrl: 'app/payee/payee-search.component.html',
      controller : PayeeSearchController,
      bindings   : {
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