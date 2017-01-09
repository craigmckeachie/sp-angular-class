(function( angular ) {
  angular.module( 'category' )
      .component( 'categoryMain', {
        template: '<h3>Placeholder for category component</h3>',
        controller: CategoryMainController
      } );

  function CategoryMainController( $log ) {
    $log.log( 'CategoryMainController initialized.' );
  }
})( angular );