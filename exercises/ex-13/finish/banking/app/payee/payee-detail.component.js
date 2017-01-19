(function( angular ) {
  angular.module( 'payee' )
    .component( 'payeeDetail', {
      templateUrl: 'app/payee/payee-detail.component.html',
      bindings   : {
        payee: '<'
      },
      controller : PayeeDetailController
    } );

  function PayeeDetailController( categoryLookup ) {
    var ctrl = this;

    ctrl.$onInit = onInit;

    function onInit() {
      if ( !angular.isDefined( ctrl.payee.category ) ) {
        ctrl.payee.category = categoryLookup.byId( ctrl.payee.categoryId );
      }
    }

  }
})( angular );