(function( angular ) {
  angular.module( 'examples.testing', [] )
    .component( 'testTarget', {
      templateUrl: 'test-target.component.html',
      bindings   : {
        externalMessage: '<'
      },
      controller : Controller
    } );

  function Controller( $log ) {
    var ctrl = this;
    ctrl.leftMessage = 'This is a message on the left';
    ctrl.rightMessage = 'This is a message on the right';

    ctrl.$onInit = onInit;
    ctrl.$onChanges = onChanges;

    function onInit() {
      $log.log( 'Controller.$onInit()' );
      ctrl.rightMessage += ' (after $onInit())';
      ctrl.leftMessage += ' (after $onInit())';
    }

    function onChanges() {
      $log.log( 'Controller.$onChanges' );
    }
  }
})( angular );