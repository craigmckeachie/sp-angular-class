(function( angular ) {
  angular.module( 'examples.styles', [] )
    .component( 'stylesExamples', {
      templateUrl: 'styles.component.html',
      controller : StylesController
    } );

  function StylesController( $log ) {
    var ctrl = this;
    $log.log( 'StylesController created.' );

    ctrl.x = 5;

    ctrl.getStyles = getStyles;
    ctrl.getClasses = getClasses;
    ctrl.getClassConfiguration = getClassConfiguration;

    function getStyles() {
      return {
        backgroundColor: (ctrl.x > 10 ? 'red' : 'blue'),
        color          : 'white',
        border         : '2px solid ' + (ctrl.x > 10 ? 'blue' : 'red')
      }
    }

    function getClasses() {
      var styles = [ 'boldify' ];
      styles.push( ctrl.x < 10 ? 'highlightGreen' : 'highlightYellow' );

      return styles;
    }

    function getClassConfiguration() {
      return {
        highlightGreen : ctrl.x > 10,
        highlightYellow: ctrl.x < 10,
        boldify        : true
      }
    }
  }
})( angular );