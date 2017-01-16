(function( angular ) {
  angular.module( 'category' )
    .directive( 'categorySelect',
      function() {
        return {
          templateUrl: 'app/category/category-select.directive.html',
          controller : CategorySelectController,
          scope      : {
            ngModel: '='
          },
          restrict   : 'E'
        };

        function CategorySelectController( categoryDAO, $scope ) {
          categoryDAO.query()
            .then( function( categories ) {
              $scope.categories = categories;
            } )
        }
      } );

})( angular );