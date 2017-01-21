describe( 'Testing txList Component', function() {
  var $componentController, $q, txUtils, resolver;
  beforeEach( function() {
    module( 'tx.list' );
    module( 'tx.utils' );
    inject( function( _$componentController_, _$q_, _txUtils_ ) {
      $componentController = _$componentController_;
      txUtils = _txUtils_;
      $q = _$q_;
    } );

    // Always-successful mocked promise
    resolver = $q( function( resolve ) {
      resolve( getTxs() );
    } );

  } );

  it( 'should load txComponent\'s controller', function() {
    var component = $componentController( 'txList', { $log: console, $stateParams: {} } );
    expect( component ).toBeTruthy();
    expect( component.$onInit ).toBeTruthy();
    expect( component.$onChanges ).toBeTruthy();
  } );

  it( 'should run updateTx() with criteria and no tx', function() {
    var component = $componentController( 'txList',
      { $log: console, $stateParams: { foo: 'bar' } } );

    spyOn( txUtils, 'sameParams' ).and.callThrough();
    component.txComponent = {};
    component.txComponent.search = jasmine.createSpy( 'search' ).and.returnValue( resolver );

    component.$onInit();
    expect( txUtils.sameParams ).not.toHaveBeenCalled();
    expect( component.txComponent.search ).toHaveBeenCalled();
  } );

  it( 'should run updateTx() if the parameters are not the same', function() {

    var component = $componentController( 'txList',
      { $log: console, $stateParams: { foo: 'bar' } } );

    spyOn( txUtils, 'sameParams' ).and.callThrough();
    component.txComponent = {};
    component.txComponent.search = jasmine.createSpy( 'search' ).and.returnValue( resolver );

    component.$onInit();
    expect( txUtils.sameParams ).not.toHaveBeenCalled();
    expect( component.txComponent.search ).toHaveBeenCalled();

    component = null;

    component = $componentController( 'txList',
      { $log: console, $stateParams: { foo: 'bar' } },
      { transactions: getTxs() } );

    component.txComponent = {};
    component.txComponent.search = jasmine.createSpy( 'search' ).and.returnValue( resolver );

    component.$onInit();
    expect( txUtils.sameParams ).toHaveBeenCalled();
    expect( component.txComponent.search ).toHaveBeenCalled();

  } );

  it( 'should not run updateTx() in the absence of parameters', function() {
    var component = $componentController( 'txList',
      { $log: console, $stateParams: {} },
      { transactions: getTxs() } );

    spyOn( txUtils, 'sameParams' ).and.callThrough();
    component.txComponent = {};
    component.txComponent.search = jasmine.createSpy( 'search' );

    component.$onInit();
    expect( txUtils.sameParams ).not.toHaveBeenCalled();
    expect( component.txComponent.search ).not.toHaveBeenCalled();
  } );

  function getTxs() {
    return [ {
      "txId"      : 1,
      "payeeId"   : 17,
      "payee"     : {
        "payeeId"   : 17,
        "payeeName" : "Bauch-Stehr Medical Partners",
        "categoryId": 8,
        "address"   : "671 York Ave",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "54952",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Versatile optimizing support",
        "txs"       : null
      },
      "amount"    : -97.74,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-04T23:50:19.938",
      "accountId" : 1,
      "categoryId": 8,
      "category"  : {
        "categoryId"  : 8,
        "categoryName": "Health",
        "txs"         : null
      }
    }, {
      "txId"      : 2,
      "payeeId"   : 17,
      "payee"     : {
        "payeeId"   : 17,
        "payeeName" : "Bauch-Stehr Medical Partners",
        "categoryId": 8,
        "address"   : "671 York Ave",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "54952",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Versatile optimizing support",
        "txs"       : null
      },
      "amount"    : -68.91,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-05-06T20:48:50.504",
      "accountId" : 1,
      "categoryId": 8,
      "category"  : {
        "categoryId"  : 8,
        "categoryName": "Health",
        "txs"         : null
      }
    }, {
      "txId"      : 3,
      "payeeId"   : 17,
      "payee"     : {
        "payeeId"   : 17,
        "payeeName" : "Bauch-Stehr Medical Partners",
        "categoryId": 8,
        "address"   : "671 York Ave",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "54952",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Versatile optimizing support",
        "txs"       : null
      },
      "amount"    : -94.58,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-07-19T16:22:56.498",
      "accountId" : 1,
      "categoryId": 8,
      "category"  : {
        "categoryId"  : 8,
        "categoryName": "Health",
        "txs"         : null
      }
    }, {
      "txId"      : 4,
      "payeeId"   : 17,
      "payee"     : {
        "payeeId"   : 17,
        "payeeName" : "Bauch-Stehr Medical Partners",
        "categoryId": 8,
        "address"   : "671 York Ave",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "54952",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Versatile optimizing support",
        "txs"       : null
      },
      "amount"    : -57.24,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-11-28T11:55:44.790",
      "accountId" : 1,
      "categoryId": 8,
      "category"  : {
        "categoryId"  : 8,
        "categoryName": "Health",
        "txs"         : null
      }
    }, {
      "txId"      : 5,
      "payeeId"   : 6,
      "payee"     : {
        "payeeId"   : 6,
        "payeeName" : "Shop-Rite Grocery Store",
        "categoryId": 5,
        "address"   : "311 St. Paul Ave.",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "08697",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : -52.44,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-03T23:42:56.709",
      "accountId" : 1,
      "categoryId": 5,
      "category"  : {
        "categoryId"  : 5,
        "categoryName": "Food",
        "txs"         : null
      }
    }, {
      "txId"      : 6,
      "payeeId"   : 6,
      "payee"     : {
        "payeeId"   : 6,
        "payeeName" : "Shop-Rite Grocery Store",
        "categoryId": 5,
        "address"   : "311 St. Paul Ave.",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "08697",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : -85.11,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-14T02:24:15.225",
      "accountId" : 1,
      "categoryId": 5,
      "category"  : {
        "categoryId"  : 5,
        "categoryName": "Food",
        "txs"         : null
      }
    }, {
      "txId"      : 7,
      "payeeId"   : 6,
      "payee"     : {
        "payeeId"   : 6,
        "payeeName" : "Shop-Rite Grocery Store",
        "categoryId": 5,
        "address"   : "311 St. Paul Ave.",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "08697",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : -61.09,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-16T11:24:42.123",
      "accountId" : 1,
      "categoryId": 5,
      "category"  : {
        "categoryId"  : 5,
        "categoryName": "Food",
        "txs"         : null
      }
    }, {
      "txId"      : 8,
      "payeeId"   : 6,
      "payee"     : {
        "payeeId"   : 6,
        "payeeName" : "Shop-Rite Grocery Store",
        "categoryId": 5,
        "address"   : "311 St. Paul Ave.",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "08697",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : -63.76,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-23T06:32:34.844",
      "accountId" : 1,
      "categoryId": 5,
      "category"  : {
        "categoryId"  : 5,
        "categoryName": "Food",
        "txs"         : null
      }
    }, {
      "txId"      : 9,
      "payeeId"   : 8,
      "payee"     : {
        "payeeId"   : 8,
        "payeeName" : "Worthless Peon Productions",
        "categoryId": 19,
        "address"   : "125 Scrub Street",
        "city"      : "Santa Monica",
        "state"     : "CA",
        "zip"       : "90111",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-01T07:24:02.995",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    }, {
      "txId"      : 10,
      "payeeId"   : 8,
      "payee"     : {
        "payeeId"   : 8,
        "payeeName" : "Worthless Peon Productions",
        "categoryId": 19,
        "address"   : "125 Scrub Street",
        "city"      : "Santa Monica",
        "state"     : "CA",
        "zip"       : "90111",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-07T12:20:55.267",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    }, {
      "txId"      : 11,
      "payeeId"   : 9,
      "payee"     : {
        "payeeId"   : 9,
        "payeeName" : "The CX Institute",
        "categoryId": 19,
        "address"   : "1715 Greymalkin Lane",
        "city"      : "Westchester",
        "state"     : "NY",
        "zip"       : "10047",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-12T00:29:39.489",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    }, {
      "txId"      : 12,
      "payeeId"   : 9,
      "payee"     : {
        "payeeId"   : 9,
        "payeeName" : "The CX Institute",
        "categoryId": 19,
        "address"   : "1715 Greymalkin Lane",
        "city"      : "Westchester",
        "state"     : "NY",
        "zip"       : "10047",
        "image"     : null,
        "motto"     : null,
        "txs"       : null
      },
      "amount"    : 2000.0,
      "txType"    : "Credit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-17T18:05:03.733",
      "accountId" : 1,
      "categoryId": 19,
      "category"  : {
        "categoryId"  : 19,
        "categoryName": "Salary",
        "txs"         : null
      }
    }, {
      "txId"      : 13,
      "payeeId"   : 43,
      "payee"     : {
        "payeeId"   : 43,
        "payeeName" : "Wayne Enterprises",
        "categoryId": 10,
        "address"   : "319 Thomas Wayne Road",
        "city"      : "Gotham",
        "state"     : "NY",
        "zip"       : "10939",
        "image"     : "/images/technics/1.jpg",
        "motto"     : "Persevering regional moratorium",
        "txs"       : null
      },
      "amount"    : -85.17,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-06T18:15:50.529",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    }, {
      "txId"      : 14,
      "payeeId"   : 20,
      "payee"     : {
        "payeeId"   : 20,
        "payeeName" : "Zieme & Ratke, Pediatrics",
        "categoryId": 14,
        "address"   : "1873 Razif Loop",
        "city"      : "Fonzopo",
        "state"     : "FL",
        "zip"       : "55902",
        "image"     : "/images/business/2.jpg",
        "motto"     : "Multi-lateral grid-enabled toolset",
        "txs"       : null
      },
      "amount"    : -90.54,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-19T01:42:36.951",
      "accountId" : 1,
      "categoryId": 14,
      "category"  : {
        "categoryId"  : 14,
        "categoryName": "Medical",
        "txs"         : null
      }
    }, {
      "txId"      : 15,
      "payeeId"   : 22,
      "payee"     : {
        "payeeId"   : 22,
        "payeeName" : "Heathcote Inc",
        "categoryId": 3,
        "address"   : "798 Defaj Point",
        "city"      : "Tajuwbi",
        "state"     : "WI",
        "zip"       : "88464",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Secured web-enabled Graphical Clothing Interface",
        "txs"       : null
      },
      "amount"    : -72.61,
      "txType"    : "Auto-Pay",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-23T02:15:34.336",
      "accountId" : 1,
      "categoryId": 3,
      "category"  : {
        "categoryId"  : 3,
        "categoryName": "Clothing",
        "txs"         : null
      }
    }, {
      "txId"      : 16,
      "payeeId"   : 15,
      "payee"     : {
        "payeeId"   : 15,
        "payeeName" : "Kerluke Amusements",
        "categoryId": 21,
        "address"   : "1729 Bozoz Mill",
        "city"      : "Little Rock",
        "state"     : "AR",
        "zip"       : "56053",
        "image"     : "/images/cats/4.jpg",
        "motto"     : "Phased reciprocal product",
        "txs"       : null
      },
      "amount"    : -64.65,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-29T18:45:17.658",
      "accountId" : 1,
      "categoryId": 21,
      "category"  : {
        "categoryId"  : 21,
        "categoryName": "Toys",
        "txs"         : null
      }
    }, {
      "txId"      : 17,
      "payeeId"   : 27,
      "payee"     : {
        "payeeId"   : 27,
        "payeeName" : "Deckow-Hand",
        "categoryId": 10,
        "address"   : "1622 Avena Circle",
        "city"      : "Nuebaheh",
        "state"     : "MA",
        "zip"       : "52038",
        "image"     : "/images/animals/9.jpg",
        "motto"     : "Cloned directional attitude",
        "txs"       : null
      },
      "amount"    : -49.97,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-12T00:25:17.607",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    }, {
      "txId"      : 18,
      "payeeId"   : 22,
      "payee"     : {
        "payeeId"   : 22,
        "payeeName" : "Heathcote Inc",
        "categoryId": 3,
        "address"   : "798 Defaj Point",
        "city"      : "Tajuwbi",
        "state"     : "WI",
        "zip"       : "88464",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Secured web-enabled Graphical Clothing Interface",
        "txs"       : null
      },
      "amount"    : -94.53,
      "txType"    : "Auto-Pay",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-22T11:36:19.598",
      "accountId" : 1,
      "categoryId": 3,
      "category"  : {
        "categoryId"  : 3,
        "categoryName": "Clothing",
        "txs"         : null
      }
    }, {
      "txId"      : 19,
      "payeeId"   : 19,
      "payee"     : {
        "payeeId"   : 19,
        "payeeName" : "The Senator Theater",
        "categoryId": 15,
        "address"   : "1689 North York Rd",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "48693",
        "image"     : "/images/business/5.jpg",
        "motto"     : "Yesterday's movies tomorrow",
        "txs"       : null
      },
      "amount"    : -16.64,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-15T08:05:39.541",
      "accountId" : 1,
      "categoryId": 15,
      "category"  : {
        "categoryId"  : 15,
        "categoryName": "Movies",
        "txs"         : null
      }
    }, {
      "txId"      : 20,
      "payeeId"   : 10,
      "payee"     : {
        "payeeId"   : 10,
        "payeeName" : "Gleichner, Lind and Olson, Ltd.",
        "categoryId": 17,
        "address"   : "142 Wune Street",
        "city"      : "Deetelu",
        "state"     : "WV",
        "zip"       : "80587",
        "image"     : "/images/animals/9.jpg",
        "motto"     : "Optimized executive frame",
        "txs"       : null
      },
      "amount"    : -92.69,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-10T08:25:03.917",
      "accountId" : 1,
      "categoryId": 17,
      "category"  : {
        "categoryId"  : 17,
        "categoryName": "Outdoors",
        "txs"         : null
      }
    }, {
      "txId"      : 21,
      "payeeId"   : 32,
      "payee"     : {
        "payeeId"   : 32,
        "payeeName" : "The Wolf and Tortoise",
        "categoryId": 18,
        "address"   : "1939 Hetuv Pass",
        "city"      : "Sekawce",
        "state"     : "AK",
        "zip"       : "97394",
        "image"     : "/images/technics/4.jpg",
        "motto"     : "Seamless heuristic process improvement",
        "txs"       : null
      },
      "amount"    : -77.53,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-10T05:21:40.483",
      "accountId" : 2,
      "categoryId": 18,
      "category"  : {
        "categoryId"  : 18,
        "categoryName": "Restaurants",
        "txs"         : null
      }
    }, {
      "txId"      : 22,
      "payeeId"   : 28,
      "payee"     : {
        "payeeId"   : 28,
        "payeeName" : "Veum Industrial Products",
        "categoryId": 10,
        "address"   : "587 Ipobak Terrace",
        "city"      : "Majfazme",
        "state"     : "CT",
        "zip"       : "16097",
        "image"     : "/images/nature/6.jpg",
        "motto"     : "Operative maximized matrices",
        "txs"       : null
      },
      "amount"    : -38.77,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-23T00:31:48.071",
      "accountId" : 1,
      "categoryId": 10,
      "category"  : {
        "categoryId"  : 10,
        "categoryName": "Industrial",
        "txs"         : null
      }
    }, {
      "txId"      : 23,
      "payeeId"   : 22,
      "payee"     : {
        "payeeId"   : 22,
        "payeeName" : "Heathcote Inc",
        "categoryId": 3,
        "address"   : "798 Defaj Point",
        "city"      : "Tajuwbi",
        "state"     : "WI",
        "zip"       : "88464",
        "image"     : "/images/business/3.jpg",
        "motto"     : "Secured web-enabled Graphical Clothing Interface",
        "txs"       : null
      },
      "amount"    : -13.79,
      "txType"    : "Auto-Pay",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-16T13:50:06.934",
      "accountId" : 1,
      "categoryId": 3,
      "category"  : {
        "categoryId"  : 3,
        "categoryName": "Clothing",
        "txs"         : null
      }
    }, {
      "txId"      : 24,
      "payeeId"   : 19,
      "payee"     : {
        "payeeId"   : 19,
        "payeeName" : "The Senator Theater",
        "categoryId": 15,
        "address"   : "1689 North York Rd",
        "city"      : "Baltimore",
        "state"     : "MD",
        "zip"       : "48693",
        "image"     : "/images/business/5.jpg",
        "motto"     : "Yesterday's movies tomorrow",
        "txs"       : null
      },
      "amount"    : -72.4,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-01T23:15:29.052",
      "accountId" : 1,
      "categoryId": 15,
      "category"  : {
        "categoryId"  : 15,
        "categoryName": "Movies",
        "txs"         : null
      }
    }, {
      "txId"      : 25,
      "payeeId"   : 39,
      "payee"     : {
        "payeeId"   : 39,
        "payeeName" : "Rau, Kertzmann and Cremin",
        "categoryId": 15,
        "address"   : "1689 Kefoz Plaza",
        "city"      : "Podmowed",
        "state"     : "MD",
        "zip"       : "48693",
        "image"     : "/images/business/5.jpg",
        "motto"     : "Grass-roots composite infrastructure",
        "txs"       : null
      },
      "amount"    : -40.54,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-24T00:31:54.304",
      "accountId" : 1,
      "categoryId": 15,
      "category"  : {
        "categoryId"  : 15,
        "categoryName": "Movies",
        "txs"         : null
      }
    }, {
      "txId"      : 26,
      "payeeId"   : 23,
      "payee"     : {
        "payeeId"   : 23,
        "payeeName" : "Davis, Muller and Marvin",
        "categoryId": 21,
        "address"   : "319 Nazmo Road",
        "city"      : "Sohcutzeh",
        "state"     : "VT",
        "zip"       : "09725",
        "image"     : "/images/technics/1.jpg",
        "motto"     : "Persevering regional moratorium",
        "txs"       : null
      },
      "amount"    : -76.86,
      "txType"    : "Debit",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-01-16T20:23:22.875",
      "accountId" : 2,
      "categoryId": 21,
      "category"  : {
        "categoryId"  : 21,
        "categoryName": "Toys",
        "txs"         : null
      }
    } ];
  }
} );