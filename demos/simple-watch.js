(function( angular ) {
  angular.module( 'examples.watch', [] )
    .component( 'watchExample', {
      templateUrl: 'simple-watch-tpl.html'
    } )
    .directive( 'watchField', function( $log ) {
      return {
        restrict: 'A',
        link    : function( scope, element, attrs ) {
          $log.log( 'Watching %s', attrs.watchField );

          scope.$watch( attrs.watchField, function( newValue, oldValue ) {
            var elementContent = '';
            elementContent += 'Previous field value: [ ' + oldValue + ' ]<br/>';
            elementContent += 'Current field value: [ ' + newValue + ' ]';
            element.html( elementContent );
          } )
        }
      }
    } )
})( angular );