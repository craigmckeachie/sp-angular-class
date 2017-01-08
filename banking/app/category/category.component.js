(function( angular ) {
  angular.module( 'category.component', [] )
      .component( 'categoryComponent', {
        template: '<h3>Placeholder for category component</h3>',
        controller: CategoryComponentController
      } );

  function CategoryComponentController( $log ) {
    $log.log( 'CategoryComponentController initialized.' );
  }
})( angular );