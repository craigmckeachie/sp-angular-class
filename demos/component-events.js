(function( angular ) {
  angular.module( 'componentEvents', [] )
      .component('levelOne', {
        template: '<div style="padding:20px"><div><p>L1 Output:</p><ul>' +
        '<li>Level one output: {{ $ctrl.l1output }}</li>' +
        '<li>Level two output: {{ $ctrl.l2output }}</li>' +
        '<li>Level three output: {{ $ctrl.l3output }}</li>' +
        '<li>Level four output: {{ $ctrl.l4output }}</li>' +
        '</ul></div>' +
        '<level-two on-update="$ctrl.updateL1(value)"></level-two>' +
        '</div>',
        controller: function($log){
          var ctrl = this;
          ctrl.someParentValue = 'someParentValue';

          $log.log( 'Launched level-one' );

          ctrl.updateL1 = function(valAtL1) {
            $log.log( 'level-one.updateL2 called with [%s]', valAtL1 );
          }
        }
      })
      .component('levelTwo', {
        template: '<div style="padding:20px"><div><p>L2 Output:</p><ul>' +
        '<li>Level one output: {{ $ctrl.l1output }}</li>' +
        '<li>Level two output: {{ $ctrl.l2output }}</li>' +
        '<li>Level three output: {{ $ctrl.l3output }}</li>' +
        '<li>Level four output: {{ $ctrl.l4output }}</li>' +
        '</ul></div>' +
        '<level-three on-update="$ctrl.updateL2(value)"></level-three>' +
        '</div>',
        bindings : {
          onUpdate : '&'
        },
        controller: function($log){
          var ctrl = this;
          $log.log( 'Launched level-two' );

          ctrl.updateL2 = function(valAtL2) {
            $log.log( 'level-two.updateL2 called with [%s]', valAtL2 );
            ctrl.onUpdate({value: valAtL2});
          }
        }
      })
      .component('levelThree', {
        template: '<div style="padding:20px"><div><p>L3 Output:</p><ul>' +
        '<li>Level one output: {{ $ctrl.l1output }}</li>' +
        '<li>Level two output: {{ $ctrl.l2output }}</li>' +
        '<li>Level three output: {{ $ctrl.l3output }}</li>' +
        '<li>Level four output: {{ $ctrl.l4output }}</li>' +
        '</ul></div>' +
        '<level-four on-update="$ctrl.updateL3(val1, val2)"></level-four>' +
        '</div>',
        bindings : {
          onUpdate : '&'
        },
        controller: function($log){
          var ctrl = this;
          $log.log( 'Launched level-three' );

          ctrl.updateL3 = function(valAtL3, val2, val3) {
            $log.log( 'level-three.updateL3 called with [%s, %s, %s]', valAtL3, val2, val3 );

            ctrl.onUpdate({value: valAtL3});
          }
        }
      })
      .component('levelFour', {
        template: '<div style="padding:20px"><p>L4 output</p><input type="text" ng-model="$ctrl.fieldValue"><button ng-click="$ctrl.callUpdate()">Click me!</button></div>',
        bindings : {
          onUpdate : '&'
        },
        controller: function($log) {
          var ctrl = this;
          $log.log( 'Launched level-four' );

          ctrl.callUpdate = function() {
            $log.log( 'Called level-four.callUpdate(). About to invoke whatever was passed to on-update.' );
            $log.log( 'Test of someParentValue: ', ctrl.someParentValue );
            ctrl.onUpdate({val1: ctrl.fieldValue, foo: 'bar', val2: 'value2'});
          }
        }
      })
})( angular );