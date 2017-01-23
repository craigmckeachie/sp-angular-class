describe( 'Testing account-lookup.provider', function() {
  var account;

  beforeEach( function() {
    module( 'account' );

    inject( function( _account_ ) {
      account = _account_;
    } )
  } );

  it( 'should create the account value', function() {
    expect( account ).toBeDefined();
  } );

  it( 'should return "Checking" for accountId 1', function() {
    expect( account.getAccountName( 1 ) ).toBe( 'Checking' );
  } );

  it( 'should return "Savings" for accountId 2', function() {
    expect( account.getAccountName( 2 ) ).toBe( 'Savings' );
  } );

  it( 'should not return anything for out-of-bounds values', function() {
    [ 0, '0', 100, '', null, 'foo' ].forEach( function( val ) {
      expect( account.getAccountName( 0 ) ).toBeUndefined();
    } );
  } )
} );