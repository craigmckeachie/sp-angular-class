/*
 * Use the ng-class directive to color the detail panel as follows:
 * If the category is:      use the class:
 * Industrial,Music         panel-royal
 * Health                   panel-success
 * Utilities                panel-golden
 * Grocery                  panel-info
 * Toys                     panel-warning
 * Housing                  panel-danger
 *
 * And all others should default to panel-primary.
 *
 * There are several ways to do this (use a function, use a configuration object,
 * etc.). Whichever way you choose, do not forget to update
 * payee-detail.component.html with the actual call to the ng-class directive.
 *
 * When you are done, test your code.
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