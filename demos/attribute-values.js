(function( angular ) {
  angular.module( 'examples.directives.attrs', [] )
    .component( 'directiveExamples', {
        templateUrl: 'attribute-values-tpl.html',
        controller : function( $log ) {
          var ctrl = this;
          ctrl.toggleHighlight = false;
          ctrl.person = {
            name: 'Robert Sabatelli'
          };

          ctrl.callMe = function() {
            ctrl.toggleHighlight = !ctrl.toggleHighlight;
          }
        }
      }
    )
    .directive( 'simpleGreeting', function() {
      return {
        template: '<span>Hello, there!</span>'
      }
    } )
    /*
     * Oddly, if you specify an isolate scope for a directive that is an element
     * and your directive template does NOT include a sub-element, the directive
     * will _still_ prototypically inherit from the parent scope. Which is not
     * what we want!
     */
    .directive( 'atGreeting', function() {
      return {
        template: '<span>Hello, {{ user }}!</span>',
        scope   : {
          user: '@name'
        }
      }
    } )
    .directive( 'equalGreeting', function() {
      return {
        template: '<span>Hello, {{ user }}</span>',
        scope   : {
          user: '=name'
        }
      };
    } )
    .directive( 'objectGreeting', function() {
      return {
        template: '<span>Hello {{ user.name }}</span>',
        scope   : {
          user: '=?obj'
        }
      }
    } )
    .directive( 'eventGreeting', function() {
      return {
        template: '<span ng-click="clickHandler()">Hello {{ user.name }}</span>',
        scope   : {
          user        : '=obj',
          clickHandler: '&onClick'
        }
      }

    } )

})( angular );
