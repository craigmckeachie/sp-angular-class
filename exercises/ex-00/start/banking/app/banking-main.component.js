(function( angular ) {
  angular.module( 'banking' )
    .component( 'bankingMain', {
      templateUrl: 'app/banking-main.component.html',
      controller : BankingMainController
    } );

  function BankingMainController( $log ) {
    $log.debug( 'Banking App Component initialized' );
  }
})( angular );