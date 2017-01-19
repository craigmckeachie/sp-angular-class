/*
 * Add a controller, PayeeDetailController
 * It should depend on categoryLookup
 * In the $onInit lifecycle function, check to see if ctrl.payee has a
 * category property
 * If it doesn't, use ctrl.payee.categoryId to lookup a category and
 * assign it back as ctrl.payee.category.
 *
 * Then go to payee-detail.component.html
 *
 */
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