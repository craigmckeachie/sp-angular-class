(function( angular ) {
  angular.module( 'payee' )
    .constant( 'categoryLookup', {
      byName: byName,
      byId  : byId
    } );

  function byId( categoryId ) {
    var foundCategory = null;
    getCategories().some( function( category ) {
      if ( Number( category.id ) === Number( categoryId ) ) {
        foundCategory = category;
        return true;
      }
    } );
    return foundCategory;
  }

  function byName( categoryName ) {
    var re = new RegExp( categoryName, 'i' );
    return getCategories().filter( function( category ) {
      return re.test( category.categoryName )
    } );
  }

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
    ]

  }
})( angular );