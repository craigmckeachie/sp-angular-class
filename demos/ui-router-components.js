(function( angular ) {
  angular.module( 'componentRouting', [ 'ui.router' ] )
    .component( 'componentOne', {
      bindings  : {
        'foo': '<'
      },
      controller: ComponentOneController,
      template  : '<p>Component one</p><p>foo is {{ foo }} or maybe {{ $ctrl.foo }}</p><component-two></component-two>'
    } )
    .component( 'componentTwo', {
      controller: function( $log ) {
        $log.log( 'Component Two is running.' );
      },
      template  : '<p>This is component two</p>'
    } )
    .config( function( $stateProvider, $urlRouterProvider ) {
      $urlRouterProvider.otherwise( '/main' );
      $stateProvider.state( 'main', {
        url      : '/main',
        component: 'componentOne',
        resolve  : {
          foo: function() {
            return 'bar';
          }
        }
      } )
    } );

  function ComponentOneController( $log ) {
    var ctrl = this;
    $log.log( 'Component One running' );
    $log.log( 'ctrl.foo: ', ctrl.foo );
  }
})( angular );