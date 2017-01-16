(function( angular ) {
  angular.module( 'category' )
    .directive( 'categorySelect',
      function() {
        return {
          controller      : CategorySelectController,
          bindToController: true,
          controllerAs    : '$ctrl',
          restrict        : 'A',
          link            : categorySelectLink
        };

        function CategorySelectController( categoryDAO ) {
          var ctrl = this;
          categoryDAO.query()
            .then( function( categories ) {
              ctrl.categories = categories;
            } )
        }

        function categorySelectLink( scope, element, attrs, ctrl ) {
          var options = [];

          scope.$watch( '$ctrl.categories', function() {
            if ( ctrl.categories ) {
              ctrl.categories.forEach( function( category ) {
                options.push( '<option value="' + category.id + '">' + category.categoryName + '</option>' );
              } );
              element.html( options.join( '' ) );
            }
          } );

        }
      } );

})( angular );