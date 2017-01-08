(function( angular ) {
  angular.module( 'componentRequire', [] )
      .component( 'levelOne', {
        template: '<div style="padding:20px">' +
        '<h3>Level One</h3>' +
        '<label for="l1val">Enter a value for $ctrl.level1Value: </label>' +
        '<input type="text" ng-model="$ctrl.level1Value" id="l1val">' +
        '<p>$ctrl.level1Value is {{ $ctrl.level1Value }}.</p>' +
        '<p>$ctrl.level2Value is {{ $ctrl.level2Value }}.</p>' +
        '<level-two></level-two>' +
        '</div>',
        controller: function() {
          var ctrl = this;
          ctrl.give = function( val ) { ctrl.level2Value = val; };
          ctrl.take = function() { return ctrl.level1Value; };
        }
      } )
      .component( 'levelTwo', {
        template: '<div style="padding:20px">' +
        '<h3>Level Two</h3>' +
        '<label for="l2val">Enter a value for $ctrl.level2Value: </label>' +
        '<input type="text" ng-model="$ctrl.level2Value" id="l2val"> ' +
        '<button ng-click="$ctrl.updateParent($ctrl.level2Value)">Update parent</button>' +
        '<p>$ctrl.level1Value is {{ $ctrl.parent.take() }}.</p>' +
        '<p>$ctrl.level2Value is {{ $ctrl.level2Value }}.</p>' +
        '</div>',
        require: {
          parent: '^levelOne'
        },
        controller: function() {
          var ctrl = this;

          ctrl.updateParent = function(val) { ctrl.parent.give( val ); };
        }
      } )
})( angular );