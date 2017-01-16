(function( angular ) {
  angular.module( 'payee.detail', [] )
      .component( 'payeeDetail', {
        templateUrl: 'app/payee/payee-detail-tpl.html',
        controller: PayeeDetailController,
        bindings: {
          payee: '<',
          onBack: '&',
          toSearch: '&'
        }
      } );

  function PayeeDetailController( $stateParams ) {
    var ctrl = this;
    ctrl.clickBack = clickBack;
    ctrl.clickSearch = clickSearch;

    function clickSearch() {
      ctrl.toSearch();
    }

    function clickBack() {
      ctrl.onBack();
    }
  }
})( angular );