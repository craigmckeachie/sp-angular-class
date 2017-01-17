(function( angular ) {
  angular.module( 'examples.hideShow', [] )
      .component( 'hideVsIf', {
        templateUrl: 'hide-vs-if.component.html',
        controller: HideVsIfController
      } );

  function HideVsIfController($log) {
    var ctrl = this;
    ctrl.show = true;
    ctrl.inDOM = true;
  }
})( angular );