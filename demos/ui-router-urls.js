(function( angular ) {
  angular.module( 'urlRouting', [ 'ui.router' ] )
      .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise( '/A' );
        $stateProvider.state('alpha', {
          url: '/{capitalLetter:[A-Z]}',
          template: '<p>You entered the letter {{ capitalLetter }}. <div ui-view></div></p>',
          controller: function($scope, $stateParams) {
            $scope.capitalLetter = $stateParams.capitalLetter;
          }
        })
            .state('numeric', {
              url: '/{someNum:[0-9]+}',
              template: '<p>You entered the number {{ someNum }}. <div ui-view></div></p>',
              controller: function($scope, $stateParams) {
                $scope.someNum = $stateParams.someNum;
              }

            })
      })
})( angular );