(function( angular ) {
  angular.module( 'payee' )
    .component( 'payeeDetail', {
      templateUrl: 'app/payee/payee-detail.component.html',
      bindings   : {
        payee: '<'
      }
    } );
})( angular );