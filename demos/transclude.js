(function( angular ) {
  angular.module( 'examples.transclusion', [] )
    .component( 'exampleTransclude', {
      templateUrl: 'transclude-tpl.html',
      controller : function() {
        var ctrl = this;
        ctrl.foo = 'Foo from the controller';
      }
    } )
    .directive( 'boldify', function() {
      return {
        transclude: true,
        template  : '<b><span ng-transclude></span></b>'
      };
    } )
    .directive( 'boldifyWithAttr', function() {
      return {
        transclude: true,
        scope     : {
          bar: '@'
        },
        template  : 'The bar attribute is: <b>{{ bar }}</b>. Transcluded content goes here: &lt;<span ng-transclude></span>&gt;'
      }
    } );

})( angular );
