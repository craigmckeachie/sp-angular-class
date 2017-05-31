(function( angular ) {
  angular.module( 'payee' )
    .component( 'payeeList', {
      templateUrl: 'app/payee/payee-list.component.html',
      controller : PayeeListController,
      bindings   : {
        payees       : '<',
        onPayeeSelect: '&'
      }
    } );

  function PayeeListController( $log ) {
    var ctrl = this;

    ctrl.selectPayee = selectPayee;
    ctrl.findAll = findAll;
    ctrl.$onInit = onInit;

    function onInit() {
      ctrl.originalSet = ctrl.payees;
    }

    function selectPayee( payee ) {
      ctrl.onPayeeSelect( { payee: payee } );
    }

    function findAll( field, payee, event ) {

      if ( ctrl.payees !== ctrl.originalSet ) {
        ctrl.payees = ctrl.originalSet;
        event.stopPropagation();
        return;
      }

      var search = { field: field, value: payee[ field ] };

      ctrl.payees = ctrl.payees.filter( function( payee ) {
        if ( payee[ search.field ].indexOf( search.value ) > -1 ) {
          return true;
        }
      } );

      event.stopPropagation();
    }

  }
})( angular );