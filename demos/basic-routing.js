(function( angular ) {
  angular.module( 'urlRouting', [ 'ui.router' ] )
    .config( routeConfiguration );

  function routeConfiguration( $stateProvider ) {
    $stateProvider
      .state( 'alpha', {
        url     : '/alpha',
        template: '<h2>You picked alpha state</h2>'
      } )
      .state( 'beta', {
        url     : '/beta',
        template: '<h3>You picked beta state</h3>'
      } )
      .state( 'gamma', {
        url     : '/gamma',
        template: '<h4>You picked gamma state</h4>'
      } );
  }
})( angular );