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
    ctrl.setPanelClass = setPanelClass;

    function setPanelClass(categoryName) {
      var panelClass = 'panel-primary';
      switch (categoryName) {
        case 'Industrial':
        case 'Music':
          panelClass =  'panel-royal';
          break;
        case 'Health':
          panelClass =  'panel-success';
          break;
        case 'Utilities':
          panelClass =  'panel-golden';
          break;
        case 'Grocery':
          panelClass =  'panel-info';
          break;
        case 'Toys':
          panelClass =  'panel-warning';
          break;
        case 'Housing':
          panelClass =  'panel-danger';
          break;
      }

      return panelClass;
    }

    function onInit() {
      if ( !angular.isDefined( ctrl.payee.category ) ) {
        ctrl.payee.category = categoryLookup.byId( ctrl.payee.categoryId );
      }
    }

  }
})( angular );