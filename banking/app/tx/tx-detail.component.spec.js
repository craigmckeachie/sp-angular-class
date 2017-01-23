describe( 'Testing tx-detail.component', function() {
  var $componentController, $log, tx, accountMock;

  beforeEach( function() {
    module( 'tx' );
    module( 'htmlTemplates' );

    accountMock = td.object();
    accountMock.getAccountName = td.function();
    td.when( accountMock.getAccountName( 1 ) ).thenReturn( 'Checking' );
    td.when( accountMock.getAccountName( 2 ) ).thenReturn( 'Savings' );

    module( function( $provide ) {
      $provide.value( 'account', accountMock );
    } );

    tx = {
      "id"        : 500,
      "payeeId"   : 47,
      "payee"     : {
        "id"        : 47,
        "payeeName" : "Goodman, Lieber, Kurtzberg, Holliway",
        "categoryId": 13,
        "address"   : "16 W 12 St.",
        "city"      : "New York",
        "state"     : "NY",
        "zip"       : "10015",
        "image"     : "/images/animals/9.jpg",
        "motto"     : null
      },
      "amount"    : -35.77,
      "txType"    : "Withdrawal",
      "txStatus"  : "Cleared",
      "txDate"    : "2015-08-19T02:51:40.714",
      "accountId" : 2,
      "categoryId": 13,
      "category"  : {
        "id"          : 13,
        "categoryName": "Legal"
      }
    };

    inject( function( _$componentController_, _$log_ ) {
      $componentController = _$componentController_;
      $log = _$log_;
    } );
  } );

  afterEach( function() {
    td.reset();

    // Messages logged using $log.log()
    console.log( 'console.log: ', $log.log.logs );
  } );

  it( 'should load the component', function() {
    var ctrl = $componentController( 'txDetail',
      { account: accountMock },
      { tx: tx } );

    expect( ctrl ).toBeDefined();
    expect( ctrl.tx ).toEqual( tx );
  } );

  describe( 'component as HTML tests:', function() {
    var $compile, $rootScope, scope, isoScope, controller, txDetail;

    beforeEach( function() {
      inject( function( _$compile_, _$rootScope_ ) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        scope = $rootScope.$new();
        scope.$ctrl = { tx: tx };

        txDetail = $compile( '<tx-detail tx="$ctrl.tx"></tx-detail>' )( scope );
        scope.$digest();
        isoScope = txDetail.isolateScope();
        controller = txDetail.controller( 'txDetail' );
      } );
    } );

    it( 'should load the component as HTML', function() {
      expect( txDetail ).toBeDefined();
      expect( txDetail.html() ).toContain( tx.id );
    } );

    it( 'should update a tx without an accountName on changes', function() {
      var newTx = Object.assign( {}, tx );
      delete newTx.accountName;
      newTx.id = 501;
      scope.$ctrl = { tx: newTx };

      spyOn( controller, '$onChanges' ).and.callThrough();
      spyOn( accountMock, 'getAccountName' ).and.callThrough();

      expect( controller.$onChanges ).not.toHaveBeenCalled();
      expect( accountMock.getAccountName ).not.toHaveBeenCalled();

      scope.$digest();
      expect( controller.$onChanges ).toHaveBeenCalled();
      expect( accountMock.getAccountName ).toHaveBeenCalled();
    } );

    it( 'should not update a tx that has an accountName on changes', function() {
      var newTx = Object.assign( {}, tx );
      newTx.id = 501;
      scope.$ctrl = { tx: newTx };

      spyOn( controller, '$onChanges' ).and.callThrough();
      spyOn( accountMock, 'getAccountName' ).and.callThrough();

      expect( controller.$onChanges ).not.toHaveBeenCalled();
      expect( accountMock.getAccountName ).not.toHaveBeenCalled();

      scope.$digest();
      expect( controller.$onChanges ).toHaveBeenCalled();
      expect( accountMock.getAccountName ).not.toHaveBeenCalled();
    } );
  } )

} );