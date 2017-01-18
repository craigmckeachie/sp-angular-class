(function( angular ) {
  angular.module( 'examples.events', [] )
    .component( 'eventHandling', {
      templateUrl: 'event-handling.component.html',
      controller : EventHandlingController
    } );

  function EventHandlingController( $log ) {
    $log.log( 'Event Handling' );
    var ctrl = this;

    ctrl.clickHandler = clickHandler;
    ctrl.enterHandler = enterHandler;
    ctrl.leaveHandler = leaveHandler;

    function clickHandler( event ) {
      $log.log( 'You clicked the button. Here is the event object: ', event );
    }

    function enterHandler() {
      $log.log( 'You entered the div. Way to follow directions!' )
    }

    function leaveHandler() {
      $log.log( 'You left the div. We\'re sorry to see you go!' )
    }
  }
})( angular );