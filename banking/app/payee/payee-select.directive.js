(function( angular ) {
  angular.module( 'payee' )
    .directive( 'payeeSelect',
      function() {
        return {
          templateUrl: 'app/payee/payee-select.directive.html',
          controller : PayeeSelectController,
          scope      : {
            ngModel: '='
          },
          restrict   : 'E'
        };

        function PayeeSelectController( payeeDAO, $scope ) {
          payeeDAO.query()
            .then( function( payees ) {
              $scope.payees = payees;
            } )
        }
      } );

})( angular );