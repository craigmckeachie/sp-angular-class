(function( angular ) {
  angular.module( 'componentHierarchy', [] )
      .component( 'levelOne', {
        template: '<div style="padding:20px">' +
        '<h3>Level One</h3>' +
        '<label for="l1val">Enter a value for $ctrl.level1Value: </label>' +
        '<input type="text" ng-model="$ctrl.level1Value" id="l1val">' +
        '<p>$ctrl.level1Value is {{ $ctrl.level1Value }}.</p>' +
        '<p>$ctrl.level4Value is {{ $ctrl.level4Value }}.</p>' +

        // Sub-component!
        '<level-two></level-two>' +
        '</div>',
        controller: function( $log ) {
          $log.log( 'Launched level-one' );
          var ctrl = this;
        }
      } )
      .component( 'levelTwo', {
        template: '<div style="padding:20px">' +
        '<h3>Level Two</h3>' +
        '<p>$ctrl.level1Value is {{ $ctrl.level1Value }}.</p>' +
        '<p>$ctrl.level4Value is {{ $ctrl.level4Value }}.</p>' +
        '<level-three></level-three>' +
        '</div>',
        controller: function( $log ) {
          $log.log( 'Launched level-two' );
          var ctrl = this;
        }
      } )
      .component( 'levelThree', {
        template: '<div style="padding:20px">' +
        '<h3>Level Three</h3>' +
        '<p>$ctrl.level1Value is {{ $ctrl.level1Value }}.</p>' +
        '<p>$ctrl.level4Value is {{ $ctrl.level4Value }}.</p>' +
        '<level-four></level-four>' +
        '</div>',
        controller: function( $log ) {
          $log.log( 'Launched level-three' );
          var ctrl = this;
        }
      } )
      .component( 'levelFour', {
        template: '<div style="padding:20px">' +
        '<h3>Level Four</h3>' +
        '<p>$ctrl.level1Value is {{ $ctrl.level1Value }}.</p>' +
        '<p>$ctrl.level4Value is {{ $ctrl.level4Value }}.</p>' +
        '<label for="l4val">Enter a value for $ctrl.level4Value: </label>' +
        '<input type="text" ng-model="$ctrl.level4Value" id="l4val">' +
        '</div>',
        controller: function( $log ) {
          $log.log( 'Launched level-four' );
          var ctrl = this;
        }
      } )
})( angular );