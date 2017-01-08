(function( angular ) {
  angular.module( 'banking.main.component', [] )
      .component( 'bankingMain', {
        templateUrl: 'app/banking-main-tpl.html',
        controller: BankingMainController
      } );

  function BankingMainController( $log ) {
    $log.debug( 'Banking App Component initialized' );
  }
})( angular );