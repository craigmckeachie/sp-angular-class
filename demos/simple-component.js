(function( angular ) {
  angular.module( 'simpleComponent', [] )
      .component( 'helloWorld', {
        template: '<h3>Hello, world, and {{ $ctrl.personName }}</h3>',
        controller: HelloWorldController
      } );

  function HelloWorldController( $log ) {
    var ctrl = this;
    ctrl.personName = 'Angela';

    $log.log( 'HelloWorldController initialized.' );
  }
})( angular );