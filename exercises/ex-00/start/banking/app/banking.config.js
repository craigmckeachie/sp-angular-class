(function( angular ) {
  angular.module( 'banking' )
    .config( bankingConfig );

  function bankingConfig( $stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise( '/tx/search' );
    $stateProvider
      .state( 'tx', {
        url      : '/tx',
        component: 'txMain'
      } )
      .state( 'payees', {
        url     : '/payees',
        template: '<payee-main></payee-main>'
      } )
      .state( 'categories', {
        url     : '/categories',
        template: '<h2>Categories</h2>'
      } );
  }

})( angular );