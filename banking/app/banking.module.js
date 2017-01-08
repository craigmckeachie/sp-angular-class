(function( angular ) {
  angular.module( 'bankingApp', [ 'banking.config', 'banking.main.component',
    'tx.component', 'payee.component', 'category.component' ] );
})( angular );