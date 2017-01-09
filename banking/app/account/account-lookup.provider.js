(function( angular ) {
  angular.module( 'account', [] )
      .value( 'account', {
        getAccountName: function( accountId ) {
          if ( accountId === 1 ) {
            return 'Checking';
          } else if ( accountId === 2 ) {
            return 'Savings';
          }
        }
      } )
})( angular );