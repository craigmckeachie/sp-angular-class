describe( 'Testing txMain component', function() {
  var $componentController, $q, $rootScope, account, mockState, mockStateParams;

  beforeEach( function() {
    module( 'account' );
    module( 'tx' );

    module( function( $provide ) {
      $provide.factory( 'txDAO', function() {
        return {
          get  : function() {
            return $q.resolve( getTxs()[ 0 ] );
          },
          query: function() {
            return $q.resolve( getTxs() );
          }
        }
      } )
    } );

    inject( function( _$componentController_, _$q_, _$rootScope_, _account_ ) {
      $componentController = _$componentController_;
      $rootScope = _$rootScope_;
      account = _account_;
      $q = _$q_;
    } );

    mockState = { $current: { name: 'tx.detail' } };
    mockStateParams = { id: 500 };

    spyOn( account, 'getAccountName' ).and.callThrough();

  } );

  it( 'should load the txMain component', function() {
    var ctrl = $componentController( 'txMain',
      {
        $log        : console,
        $state      : mockState,
        $stateParams: mockStateParams
      } );

    expect( ctrl ).toBeDefined();
  } );

  it( 'should load tx for txDetail when missing transaction', function() {
    var ctrl = $componentController( 'txMain',
      {
        $log        : console,
        $state      : mockState,
        $stateParams: mockStateParams,
        account     : account
      } );

    spyOn( ctrl, '$onInit' ).and.callThrough();

    expect( ctrl.$onInit ).not.toHaveBeenCalled();
    expect( ctrl ).toBeDefined();
    expect( account.getAccountName ).not.toHaveBeenCalled();

    ctrl.$onInit();
    $rootScope.$apply();

    expect( ctrl.$onInit ).toHaveBeenCalled();
    expect( account.getAccountName ).toHaveBeenCalled();

  } );

  function getTxs() {
    return [
      {
        "id"        : 1,
        "payeeId"   : 17,
        "payee"     : {
          "id"        : 17,
          "payeeName" : "Bauch-Stehr Medical Partners",
          "categoryId": 8,
          "address"   : "671 York Ave",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "54952",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Versatile optimizing support"
        },
        "amount"    : -97.74,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-04T23:50:19.938",
        "accountId" : 1,
        "categoryId": 8,
        "category"  : {
          "id"          : 8,
          "categoryName": "Health"
        }
      },
      {
        "id"        : 2,
        "payeeId"   : 17,
        "payee"     : {
          "id"        : 17,
          "payeeName" : "Bauch-Stehr Medical Partners",
          "categoryId": 8,
          "address"   : "671 York Ave",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "54952",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Versatile optimizing support"
        },
        "amount"    : -68.91,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-05-06T20:48:50.504",
        "accountId" : 1,
        "categoryId": 8,
        "category"  : {
          "id"          : 8,
          "categoryName": "Health"
        }
      },
      {
        "id"        : 3,
        "payeeId"   : 17,
        "payee"     : {
          "id"        : 17,
          "payeeName" : "Bauch-Stehr Medical Partners",
          "categoryId": 8,
          "address"   : "671 York Ave",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "54952",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Versatile optimizing support"
        },
        "amount"    : -94.58,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-07-19T16:22:56.498",
        "accountId" : 1,
        "categoryId": 8,
        "category"  : {
          "id"          : 8,
          "categoryName": "Health"
        }
      },
      {
        "id"        : 4,
        "payeeId"   : 17,
        "payee"     : {
          "id"        : 17,
          "payeeName" : "Bauch-Stehr Medical Partners",
          "categoryId": 8,
          "address"   : "671 York Ave",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "54952",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Versatile optimizing support"
        },
        "amount"    : -57.24,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-11-28T11:55:44.790",
        "accountId" : 1,
        "categoryId": 8,
        "category"  : {
          "id"          : 8,
          "categoryName": "Health"
        }
      },
      {
        "id"        : 5,
        "payeeId"   : 6,
        "payee"     : {
          "id"        : 6,
          "payeeName" : "Shop-Rite Grocery Store",
          "categoryId": 5,
          "address"   : "311 St. Paul Ave.",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "08697",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : -52.44,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-03T23:42:56.709",
        "accountId" : 1,
        "categoryId": 5,
        "category"  : {
          "id"          : 5,
          "categoryName": "Food"
        }
      },
      {
        "id"        : 6,
        "payeeId"   : 6,
        "payee"     : {
          "id"        : 6,
          "payeeName" : "Shop-Rite Grocery Store",
          "categoryId": 5,
          "address"   : "311 St. Paul Ave.",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "08697",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : -85.11,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-14T02:24:15.225",
        "accountId" : 1,
        "categoryId": 5,
        "category"  : {
          "id"          : 5,
          "categoryName": "Food"
        }
      },
      {
        "id"        : 7,
        "payeeId"   : 6,
        "payee"     : {
          "id"        : 6,
          "payeeName" : "Shop-Rite Grocery Store",
          "categoryId": 5,
          "address"   : "311 St. Paul Ave.",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "08697",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : -61.09,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-16T11:24:42.123",
        "accountId" : 1,
        "categoryId": 5,
        "category"  : {
          "id"          : 5,
          "categoryName": "Food"
        }
      },
      {
        "id"        : 8,
        "payeeId"   : 6,
        "payee"     : {
          "id"        : 6,
          "payeeName" : "Shop-Rite Grocery Store",
          "categoryId": 5,
          "address"   : "311 St. Paul Ave.",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "08697",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : -63.76,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-23T06:32:34.844",
        "accountId" : 1,
        "categoryId": 5,
        "category"  : {
          "id"          : 5,
          "categoryName": "Food"
        }
      },
      {
        "id"        : 9,
        "payeeId"   : 8,
        "payee"     : {
          "id"        : 8,
          "payeeName" : "Worthless Peon Productions",
          "categoryId": 19,
          "address"   : "125 Scrub Street",
          "city"      : "Santa Monica",
          "state"     : "CA",
          "zip"       : "90111",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : 2000,
        "txType"    : "Credit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-01T07:24:02.995",
        "accountId" : 1,
        "categoryId": 19,
        "category"  : {
          "id"          : 19,
          "categoryName": "Salary"
        }
      },
      {
        "id"        : 10,
        "payeeId"   : 8,
        "payee"     : {
          "id"        : 8,
          "payeeName" : "Worthless Peon Productions",
          "categoryId": 19,
          "address"   : "125 Scrub Street",
          "city"      : "Santa Monica",
          "state"     : "CA",
          "zip"       : "90111",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : 2000,
        "txType"    : "Credit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-07T12:20:55.267",
        "accountId" : 1,
        "categoryId": 19,
        "category"  : {
          "id"          : 19,
          "categoryName": "Salary"
        }
      },
      {
        "id"        : 11,
        "payeeId"   : 9,
        "payee"     : {
          "id"        : 9,
          "payeeName" : "The CX Institute",
          "categoryId": 19,
          "address"   : "1715 Greymalkin Lane",
          "city"      : "Westchester",
          "state"     : "NY",
          "zip"       : "10047",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : 2000,
        "txType"    : "Credit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-12T00:29:39.489",
        "accountId" : 1,
        "categoryId": 19,
        "category"  : {
          "id"          : 19,
          "categoryName": "Salary"
        }
      },
      {
        "id"        : 12,
        "payeeId"   : 9,
        "payee"     : {
          "id"        : 9,
          "payeeName" : "The CX Institute",
          "categoryId": 19,
          "address"   : "1715 Greymalkin Lane",
          "city"      : "Westchester",
          "state"     : "NY",
          "zip"       : "10047",
          "image"     : null,
          "motto"     : null
        },
        "amount"    : 2000,
        "txType"    : "Credit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-17T18:05:03.733",
        "accountId" : 1,
        "categoryId": 19,
        "category"  : {
          "id"          : 19,
          "categoryName": "Salary"
        }
      },
      {
        "id"        : 13,
        "payeeId"   : 43,
        "payee"     : {
          "id"        : 43,
          "payeeName" : "Wayne Enterprises",
          "categoryId": 10,
          "address"   : "319 Thomas Wayne Road",
          "city"      : "Gotham",
          "state"     : "NY",
          "zip"       : "10939",
          "image"     : "/images/technics/1.jpg",
          "motto"     : "Persevering regional moratorium"
        },
        "amount"    : -85.17,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-06T18:15:50.529",
        "accountId" : 1,
        "categoryId": 10,
        "category"  : {
          "id"          : 10,
          "categoryName": "Industrial"
        }
      },
      {
        "id"        : 14,
        "payeeId"   : 20,
        "payee"     : {
          "id"        : 20,
          "payeeName" : "Zieme & Ratke, Pediatrics",
          "categoryId": 14,
          "address"   : "1873 Razif Loop",
          "city"      : "Fonzopo",
          "state"     : "FL",
          "zip"       : "55902",
          "image"     : "/images/business/2.jpg",
          "motto"     : "Multi-lateral grid-enabled toolset"
        },
        "amount"    : -90.54,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-19T01:42:36.951",
        "accountId" : 1,
        "categoryId": 14,
        "category"  : {
          "id"          : 14,
          "categoryName": "Medical"
        }
      },
      {
        "id"        : 15,
        "payeeId"   : 22,
        "payee"     : {
          "id"        : 22,
          "payeeName" : "Heathcote Inc",
          "categoryId": 3,
          "address"   : "798 Defaj Point",
          "city"      : "Tajuwbi",
          "state"     : "WI",
          "zip"       : "88464",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Secured web-enabled Graphical Clothing Interface"
        },
        "amount"    : -72.61,
        "txType"    : "Auto-Pay",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-23T02:15:34.336",
        "accountId" : 1,
        "categoryId": 3,
        "category"  : {
          "id"          : 3,
          "categoryName": "Clothing"
        }
      },
      {
        "id"        : 16,
        "payeeId"   : 15,
        "payee"     : {
          "id"        : 15,
          "payeeName" : "Kerluke Amusements",
          "categoryId": 21,
          "address"   : "1729 Bozoz Mill",
          "city"      : "Little Rock",
          "state"     : "AR",
          "zip"       : "56053",
          "image"     : "/images/cats/4.jpg",
          "motto"     : "Phased reciprocal product"
        },
        "amount"    : -64.65,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-29T18:45:17.658",
        "accountId" : 1,
        "categoryId": 21,
        "category"  : {
          "id"          : 21,
          "categoryName": "Toys"
        }
      },
      {
        "id"        : 17,
        "payeeId"   : 27,
        "payee"     : {
          "id"        : 27,
          "payeeName" : "Deckow-Hand",
          "categoryId": 10,
          "address"   : "1622 Avena Circle",
          "city"      : "Nuebaheh",
          "state"     : "MA",
          "zip"       : "52038",
          "image"     : "/images/animals/9.jpg",
          "motto"     : "Cloned directional attitude"
        },
        "amount"    : -49.97,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-12T00:25:17.607",
        "accountId" : 1,
        "categoryId": 10,
        "category"  : {
          "id"          : 10,
          "categoryName": "Industrial"
        }
      },
      {
        "id"        : 18,
        "payeeId"   : 22,
        "payee"     : {
          "id"        : 22,
          "payeeName" : "Heathcote Inc",
          "categoryId": 3,
          "address"   : "798 Defaj Point",
          "city"      : "Tajuwbi",
          "state"     : "WI",
          "zip"       : "88464",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Secured web-enabled Graphical Clothing Interface"
        },
        "amount"    : -94.53,
        "txType"    : "Auto-Pay",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-22T11:36:19.598",
        "accountId" : 1,
        "categoryId": 3,
        "category"  : {
          "id"          : 3,
          "categoryName": "Clothing"
        }
      },
      {
        "id"        : 19,
        "payeeId"   : 19,
        "payee"     : {
          "id"        : 19,
          "payeeName" : "The Senator Theater",
          "categoryId": 15,
          "address"   : "1689 North York Rd",
          "city"      : "Baltimore",
          "state"     : "MD",
          "zip"       : "48693",
          "image"     : "/images/business/5.jpg",
          "motto"     : "Yesterday's movies tomorrow"
        },
        "amount"    : -16.64,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-15T08:05:39.541",
        "accountId" : 1,
        "categoryId": 15,
        "category"  : {
          "id"          : 15,
          "categoryName": "Movies"
        }
      },
      {
        "id"        : 20,
        "payeeId"   : 10,
        "payee"     : {
          "id"        : 10,
          "payeeName" : "Gleichner, Lind and Olson, Ltd.",
          "categoryId": 17,
          "address"   : "142 Wune Street",
          "city"      : "Deetelu",
          "state"     : "WV",
          "zip"       : "80587",
          "image"     : "/images/animals/9.jpg",
          "motto"     : "Optimized executive frame"
        },
        "amount"    : -92.69,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-10T08:25:03.917",
        "accountId" : 1,
        "categoryId": 17,
        "category"  : {
          "id"          : 17,
          "categoryName": "Outdoors"
        }
      },
      {
        "id"        : 21,
        "payeeId"   : 32,
        "payee"     : {
          "id"        : 32,
          "payeeName" : "The Wolf and Tortoise",
          "categoryId": 18,
          "address"   : "1939 Hetuv Pass",
          "city"      : "Sekawce",
          "state"     : "AK",
          "zip"       : "97394",
          "image"     : "/images/technics/4.jpg",
          "motto"     : "Seamless heuristic process improvement"
        },
        "amount"    : -77.53,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-10T05:21:40.483",
        "accountId" : 2,
        "categoryId": 18,
        "category"  : {
          "id"          : 18,
          "categoryName": "Restaurants"
        }
      },
      {
        "id"        : 22,
        "payeeId"   : 28,
        "payee"     : {
          "id"        : 28,
          "payeeName" : "Veum Industrial Products",
          "categoryId": 10,
          "address"   : "587 Ipobak Terrace",
          "city"      : "Majfazme",
          "state"     : "CT",
          "zip"       : "16097",
          "image"     : "/images/nature/6.jpg",
          "motto"     : "Operative maximized matrices"
        },
        "amount"    : -38.77,
        "txType"    : "Debit",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-23T00:31:48.071",
        "accountId" : 1,
        "categoryId": 10,
        "category"  : {
          "id"          : 10,
          "categoryName": "Industrial"
        }
      },
      {
        "id"        : 23,
        "payeeId"   : 22,
        "payee"     : {
          "id"        : 22,
          "payeeName" : "Heathcote Inc",
          "categoryId": 3,
          "address"   : "798 Defaj Point",
          "city"      : "Tajuwbi",
          "state"     : "WI",
          "zip"       : "88464",
          "image"     : "/images/business/3.jpg",
          "motto"     : "Secured web-enabled Graphical Clothing Interface"
        },
        "amount"    : -13.79,
        "txType"    : "Auto-Pay",
        "txStatus"  : "Cleared",
        "txDate"    : "2015-01-16T13:50:06.934",
        "accountId" : 1,
        "categoryId": 3,
        "category"  : {
          "id"          : 3,
          "categoryName": "Clothing"
        }
      } ];
  }

} );
