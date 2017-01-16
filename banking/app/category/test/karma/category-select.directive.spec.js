describe( 'Testing category-select', function() {
  var $compile, $rootScope, element;
  beforeEach( function() {
    module( 'category' );
    module( 'foo' );

    module( function( $provide ) {

      // Mocks out the categoryDAO DAO, so that we do not have to
      // rely on a back-end
      $provide.factory( 'categoryDAO', function( $q ) {
        var categories = getCategories();
        return {
          get: function( id ) {
            var foundCategory = null;
            categories.some( function( category ) {
              if ( category.id === id ) {
                foundCategory = category;
                return true;
              }
            } );

            return $q.resolve( foundCategory );
          },

          query: function() {
            return $q.resolve( categories );
          }
        }
      } )
    } );

    inject( function( _$compile_, _$rootScope_ ) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    } );

    element = $compile( '<category-select></category-select>' )( $rootScope );
    $rootScope.$digest();

  } );

  it( 'Should populate a select list with categories', function() {
    expect( element.html() ).toContain( 'Automotive' );
  } );

  it( 'Should not have anything not on the categories list', function() {
    expect( element.html() ).not.toContain( 'foo' );
  } );

  // TODO: Verify that it does not leak scope

  function getCategories() {
    return [
      {
        "id"          : 1,
        "categoryName": "Automotive"
      },
      {
        "id"          : 2,
        "categoryName": "Beauty"
      },
      {
        "id"          : 3,
        "categoryName": "Clothing"
      },
      {
        "id"          : 4,
        "categoryName": "Electronics"
      },
      {
        "id"          : 5,
        "categoryName": "Food"
      },
      {
        "id"          : 6,
        "categoryName": "Games"
      },
      {
        "id"          : 7,
        "categoryName": "Grocery"
      },
      {
        "id"          : 8,
        "categoryName": "Health"
      },
      {
        "id"          : 9,
        "categoryName": "Housing"
      },
      {
        "id"          : 10,
        "categoryName": "Industrial"
      },
      {
        "id"          : 11,
        "categoryName": "Jewelry"
      },
      {
        "id"          : 12,
        "categoryName": "Kids"
      },
      {
        "id"          : 13,
        "categoryName": "Legal"
      },
      {
        "id"          : 14,
        "categoryName": "Medical"
      },
      {
        "id"          : 15,
        "categoryName": "Movies"
      },
      {
        "id"          : 16,
        "categoryName": "Music"
      },
      {
        "id"          : 17,
        "categoryName": "Outdoors"
      },
      {
        "id"          : 18,
        "categoryName": "Restaurants"
      },
      {
        "id"          : 19,
        "categoryName": "Salary"
      },
      {
        "id"          : 20,
        "categoryName": "Tools"
      },
      {
        "id"          : 21,
        "categoryName": "Toys"
      },
      {
        "id"          : 22,
        "categoryName": "Utilities"
      }
    ];
  }

} );