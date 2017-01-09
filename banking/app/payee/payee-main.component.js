(function( angular ) {
  angular.module( 'payee' )
      .component( 'payeeMain', {
        templateUrl: 'app/payee/payee-main.component.html',
        controller: PayeeMainController
      } );

  function PayeeMainController( $log, $state, payeeDAO ) {
    var ctrl = this;

    ctrl.swapToList = swapToList;
    ctrl.swapToDetail = swapToDetail;
    ctrl.getById = getById;
    ctrl.search = search;

    function swapToList( criteria ) {
      $state.go( 'payees.list', criteria );
    }

    function swapToDetail( payee ) {
      ctrl.payee = payee;
      $state.go( 'payees.detail', { payeeId: ctrl.payee.payeeId } );
    }

    function getById( payeeId ) {
      return payeeDAO.get( payeeId );
    }

    function search( criteria ) {
      return payeeDAO.query( criteria );
    }
  }
})
( angular );